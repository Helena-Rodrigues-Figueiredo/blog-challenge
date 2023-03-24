import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../../context/BlogContext';
import styles from './PostsList.module.css';
import Pen from '../../assets/author-pen.jpg';

function PostsList() {
  const { valueContext: { posts, users } } = useContext(BlogContext);
  return (
    <main className={ styles.postsContainer }>
      {posts.map((post) => (
        <Link to={ `/posts/${post.id}` } key={ post.id } className={ styles.postLink }>
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
        </Link>))}
    </main>
  );
}

export default PostsList;
