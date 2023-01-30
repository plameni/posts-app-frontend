import "./Post.scss";
import { useState } from "react";

const Post = (props) => {

  const [title, setTitle] = useState(props.postData.title); 
  const postHeight = '200px';
  const borderRadius = '6px'; 

  const buttonClickHandler = () => {
    setTitle('READ!');  
    console.log('CONFIRMATION!'); 
  }

  return (
    <div className="post-div" style={ { height: postHeight, borderRadius: borderRadius } }>
      <h4> {title} </h4>
      <p> {props.postData.body} </p>
      <small>USER ID: {props.postData.userId}</small> <small> ID: {props.postData.id} </small>
      <button onClick={buttonClickHandler}>Mark as read</button>
    </div>
  );
};

export default Post;
