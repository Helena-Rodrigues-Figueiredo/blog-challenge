import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPosts from './pages/BlogPosts';
import SinglePost from './pages/SinglePost';
import BlogProvider from './context/BlogProvider';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <BlogProvider><BlogPosts /></BlogProvider> } />
        <Route
          path="/posts/:id"
          element={ <BlogProvider><SinglePost /></BlogProvider> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
