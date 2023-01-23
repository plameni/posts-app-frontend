import Post from "./../../general/Post/Post";
import Card from "./../../general/Card/Card";

const PostList = () => {
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ];

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
      <h3>Post list:</h3>

      {/* { contentToRender } */}

      { posts.length === 0 ? <h3>There are no posts</h3> : '' }
      {
        posts.map(p => <Card><Post postData={p} /></Card>)
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
