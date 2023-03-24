/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BlogContext from './BlogContext';

function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const allPosts = await fetchPosts.data;
      setPosts(allPosts);

      const fetchUsers = await axios.get('https://jsonplaceholder.typicode.com/users');
      const allUsers = fetchUsers.data;
      setUsers(allUsers);
    }

    fetchData();
  });

  const valueContext = {
    posts,
    users,
  };

  return (
    <BlogContext.Provider value={ { valueContext } }>
      { children }
    </BlogContext.Provider>
  );
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogProvider;
