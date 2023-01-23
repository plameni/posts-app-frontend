import "./App.scss";
import PostList from "./../presentation/PostList/PostList";

// Moze i css i scss 
// import './../../../node_modules/bootstrap/dist/css/bootstrap.css'; 

// Mi cemo koristiti scss
import './../../../node_modules/bootstrap/scss/bootstrap.scss'; 

const App = () => {
  return (
    <div className="container">
      <h2>This is first React App</h2>
      <PostList />
    </div>
  );
};

export default App;
