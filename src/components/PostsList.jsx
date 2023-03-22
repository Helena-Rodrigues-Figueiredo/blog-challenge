import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';

function PostsList() {
  const { valueContext: { posts, users } } = useContext(BlogContext);
  return (
    <main>
      {posts.map((post) => (
        <div key={ post.id }>
          <h2>{ post.title }</h2>
          <p>{ post.body }</p>
          { users.map((user) => (
            <h3 key={ user.id }>{user.id === post.userId && user.name}</h3>
          )) }
        </div>))}
    </main>
  );
}

export default PostsList;
