import BlogPosts from './pages/BlogPosts';
import BlogProvider from './context/BlogProvider';

function App() {
  return (
    <BlogProvider>
      <BlogPosts />
    </BlogProvider>
  );
}

export default App;
