import "./App.css";
import Post from './../general/Post/Post';

const App = () => {
  return (
    <div>
      <h2>This is first React App</h2>
      <p>This is posts app. Posts:</p>
      <Post />
      <Post></Post>
    </div>
  );
};

export default App;
