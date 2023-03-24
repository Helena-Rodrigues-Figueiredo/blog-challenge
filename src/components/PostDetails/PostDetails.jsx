import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BlogContext from '../../context/BlogContext';
import styles from './PostDetails.module.css';

function PostDetails() {
  const { valueContext: { posts } } = useContext(BlogContext);

  const [comments, setComments] = useState();
  const [userDetail, setUserDetail] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllComments() {
      const fetchComments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${+(id)}/comments`,
      );
      const allComments = fetchComments.data;
      setComments(allComments);
    }

    fetchAllComments();
  }, []);

  useEffect(() => {
    async function fetchAllDetails() {
      const idUser = posts.find((post) => post.id === +(id)).userId;

      const fetchDetails = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${idUser}`,
      );
      const allDetails = fetchDetails.data;
      setUserDetail(allDetails);
    }

    fetchAllDetails();
    console.log(userDetail);
  }, []);

  return (
    <>
      <div className={ styles.postDetail }>
        {posts?.map((post) => post.id === +(id)
      && (
        <div className={ styles.postContent } key={ post.id }>
          <div>
            <h2>{ post.title }</h2>
            <p>{ post.body }</p>
          </div>
          <div>
            <p>
              <span>Author:</span>
              {' '}
              { userDetail?.name }
            </p>
            <p>
              <span>Email:</span>
              { userDetail?.email }
            </p>
            <p>
              <span>Website:</span>
              { userDetail?.website }
            </p>
          </div>
        </div>
      ))}
        <div className={ styles.postComments }>
          <h2>Comments</h2>
          {comments?.map((comment) => (
            <div className={ styles.postComment } key={ comment.id }>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={ styles.btnDiv }>
        <button
          className={ styles.backButton }
          onClick={ (() => navigate('/')) }
        >
          Voltar

        </button>
      </div>
    </>
  );
}

export default PostDetails;
