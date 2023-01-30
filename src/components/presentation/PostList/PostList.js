import Post from "./../../general/Post/Post";
import Card from "./../../general/Card/Card";
import AddEditPost from "./../../general/AddEditPost/AddEditPost";
import { useState } from 'react'; 

const PostList = () => {
  const [ posts, setPosts ] = useState([]); 

  const addPost = (p) => {
    setPosts((posts) => [p, ...posts]); 
  }

  //const posts = [];

  // let contentToRender; 
  // if (posts.length === 0) {
  //   contentToRender = <h3>There are no posts</h3>;
  // }
  // else {
  //   contentToRender = posts.map(p => <Card><Post postData={p} /></Card>)
  // }

  return (
    <div>
      <AddEditPost onSubmitPost={addPost} />
      <h3>Post list:</h3>

      {/* { contentToRender } */}

      { posts.length === 0 ? <h3>There are no posts</h3> : '' }
      {
        posts.map(p => <Card key={p.id}><Post postData={p} /></Card>)
      }

      {/* {
        posts.length === 0 && <h3>There are no posts!</h3> ? '' : posts.map(p => <Card><Post postData={p}/></Card>)
      } */}

      {/* { posts.length === 0 ? <h3>There are no posts</h3> : posts.map(p => <Card>
          <Post postData={p}></Post>
        </Card>) } */}


      {/* forEach ne prolazi */}
      {/* {
        posts.forEach(p => return (<Card>
          <Post postData={p}></Post>
        </Card>)
      } */}
    </div>
  );
};

export default PostList;
