import Post from "./../../general/Post/Post";
import Card from "./../../general/Card/Card";
import AddEditPost from "./../../general/AddEditPost/AddEditPost";
import React, { useEffect, useState } from 'react'; 

const PostList = () => {
  const [ posts, setPosts ] = useState([]); 

  useEffect(async () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => {
    //     setPosts(data); 
    //   })

    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data = await response.json(); 
    setPosts(data); 
  }, [])

  const addPost = (p) => {
    setPosts((posts) => [p, ...posts]); 
  }

  return (
    <React.Fragment>
      <AddEditPost onSubmitPost={addPost} />
      <h3>Post list:</h3>

      { posts.length === 0 ? <h3>There are no posts</h3> : '' }
      {
        posts.map(p => <Card key={p.id}><Post postData={p} /></Card>)
      }
    </React.Fragment>
  );
};

export default PostList;
