import './AddEditPost.scss'; 
import { useState } from 'react';

const AddEditPost = (props) => {

    // const [ title, setTitle ] = useState('');
    // const [ body, setBody ] = useState(''); 
    // const [ userID, setUserID ] = useState(1);   

    const changeTitleHandler = (ev) => { 
        // setTitle(ev.target.value); 
        setPost((prevState) => { 
            return {
                ...prevState,
                title: ev.target.value
            }});
    }
    const changeBodyHandler = (ev) => { 
        // setBody(ev.target.value); 
        setPost((prevState) => { return {
            ...prevState, 
            body: ev.target.value
        }});
    }
    const changeUserIDHandler = (ev) => { 
        // setUserID(ev.target.value); 
        setPost((prevState) => { return {
            ...prevState, 
            userId: ev.target.value
        }}); 
    }

    const [ post, setPost ] = useState({ id: Math.round(Math.random() * 1000), title: '', body: '', userId: '1' }); 

    const submitHandler = (ev) => {
        ev.preventDefault(); 
        // uneseni su podaci 
        // ovaj post treba da posaljemo "glavnoj" komponenti (parent)

        props.onSubmitPost(post); 
        setPost({ id: Math.round(Math.random() * 1000), title: '', body: '', userId: '1' }); 
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>User</label>
                    <select className="form-control" value={post.userId} onChange={changeUserIDHandler}>
                        {/* <option>Choose user...</option> */}
                        <option value='1'>Leane Graham</option>
                        <option value='2'>Ervin Howell</option>
                        <option value='3'>Clementine Bauch</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={post.title} className="form-control" onChange={changeTitleHandler} />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea className="form-control" onChange={changeBodyHandler} value={post.body}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-magenta" type="submit">Add Post</button>
                </div>
            </form>
            <hr />
        </div>
    );
}
export default AddEditPost; 

