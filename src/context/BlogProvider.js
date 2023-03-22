/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BlogContext from './BlogContext';

function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const fetchPostComments = async (postId) => {
    const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const allComments = fetchComments.data;
    setComments(allComments);
  };

  const fetchUserDetails = async (userId) => {
    const fetchDetails = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const allDetails = fetchDetails.data;
    setUserDetails(allDetails);
  };

  const valueContext = {
    posts,
    users,
    fetchPostComments,
    comments,
    fetchUserDetails,
    userDetails,
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
