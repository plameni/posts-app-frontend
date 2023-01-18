import "./Post.css";
import { useState } from "react";

const Post = (props) => {

  const [title, setTitle] = useState(props.postData.title); 

  const buttonClickHandler = () => {
    setTitle('READ!');  
    console.log('CONFIRMATION!'); 
  }

  return (
    <div className="post-div">
      <h4> {title} </h4>
      <p> {props.postData.body} </p>
      <small>{props.postData.userId}</small> <small> {props.postData.id} </small>
      <button onClick={buttonClickHandler}>Mark as read</button>
    </div>
  );
};

export default Post;
