import "./App.scss";
import PostList from "./../presentation/PostList/PostList";

// Moze i css i scss 
// import './../../../node_modules/bootstrap/dist/css/bootstrap.css'; 

// Mi cemo koristiti scss
import './../../../node_modules/bootstrap/scss/bootstrap.scss'; 
import { useEffect, useState } from "react";
import Login from "../presentation/Login/Login";

const App = () => {

  const [ loggedIn, setLoggedIn ] = useState(false); 

  useEffect(() => {
    // check if user is logged in 
    const localStorageItem = localStorage.getItem('post-app');
    if (localStorageItem) 
      setLoggedIn(true);  
  }, [])

  const setLoginSuccessful = () => {
    setLoggedIn(true); 
  }

  const logoutHandler = () => {
    localStorage.removeItem('post-app'); 
    setLoggedIn(false);
  }

  return (
    <div className="container">
      <h2>This is first React App</h2>

      {
        loggedIn ? 
        <button onClick={logoutHandler} className="btn btn-primary">Logout</button> : 
        ''
      }

      {
        loggedIn ? 
        <PostList /> : 
        <Login onSuccessfulLogin={setLoginSuccessful} />
      }
    </div>
  );
};

export default App;
