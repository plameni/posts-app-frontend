import Post from './../../general/Post/Post';
import Card from './../../general/Card/Card';
import AddEditPost from './../../general/AddEditPost/AddEditPost';
import React, { useCallback, useEffect, useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = useCallback(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }, []);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //   .then(response => response.json())
        //   .then(data => {
        //     setPosts(data);
        //   })
        //   .catch(err => {
        //     console.log('CATCH');
        //   })
        //   .finally(data => {
        //     console.log('FINALLY');
        //   })

        fetchPosts();
    }, [fetchPosts]);

    const addPost = async (p) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(p),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert('Created successfully');
            const responseData = await response.json();
            console.log('RESPONSE DATA:', responseData);
            setPosts((posts) => [responseData, ...posts]);
        } else {
            alert('Error while creating post!');
        }
    };

    const deletePost = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.status === 200) {
            alert('Post deleted!');
            setPosts((posts) => posts.filter((p) => p.id !== id));
        } else {
            alert('Error while deleting post!');
        }
    };

    return (
        <React.Fragment>
            <AddEditPost onSubmitPost={addPost} />
            <h3>Post list:</h3>

            {posts.length === 0 ? <h3>There are no posts</h3> : ''}
            {posts.map((p) => (
                <Card key={p.id}>
                    <Post onDeletePost={deletePost} postData={p} />
                </Card>
            ))}
        </React.Fragment>
    );
};

export default PostList;
