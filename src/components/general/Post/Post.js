import "./Post.scss";

const Post = (props) => {

  const postHeight = '200px';
  const borderRadius = '6px'; 

  const deleteHandler = () => {
    // setTitle('READ!');  
    // console.log('CONFIRMATION!'); 
    props.onDeletePost(props.postData.id); 
  }

  return (
    <div className="post-div" style={ { height: postHeight, borderRadius: borderRadius } }>
      <h4> {props.postData.title} </h4>
      <p> {props.postData.body} </p>
      <small>USER ID: {props.postData.userId}</small> <small> ID: {props.postData.id} </small>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Post;
