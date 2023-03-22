import BlogPosts from './pages/BlogPosts';
import BlogProvider from './context/BlogProvider';
import './App.css';

function App() {
  return (
    <BlogProvider>
      <BlogPosts />
    </BlogProvider>
  );
}

export default App;
