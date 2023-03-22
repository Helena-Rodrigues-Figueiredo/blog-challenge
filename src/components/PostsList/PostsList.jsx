import React, { useContext } from 'react';
import BlogContext from '../../context/BlogContext';
import styles from './PostsList.module.css';
import Pen from '../../assets/author-pen.jpg';

function PostsList() {
  const { valueContext: { posts, users } } = useContext(BlogContext);
  return (
    <main className={ styles.postsContainer }>
      {posts.map((post) => (
        <div key={ post.id } className={ styles.postDiv }>
          <h2 className={ styles.title }>{ post.title }</h2>
          <p className={ styles.description }>{ post.body }</p>
          <div className={ styles.profile }>
            <img
              src={ Pen }
              className={ styles.profileImg }
              alt="imagem de uma caneta"
            />
            { users.map((user) => (
              <span
                key={ user.id }
                className={ styles.author }
              >
                {user.id === post.userId && user.name}

              </span>
            )) }
          </div>
        </div>))}
    </main>
  );
}

export default PostsList;
