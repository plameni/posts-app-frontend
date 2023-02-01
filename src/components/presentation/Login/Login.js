import React, { useState } from 'react';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsernameHandler = (ev) => {
        setUsername(ev.target.value);
    };

    const changePasswordHandler = (ev) => {
        setPassword(ev.target.value);
    };

    const onLoginSubmitted = (ev) => {
        ev.preventDefault();
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('post-app', 'token');
            props.onSuccessfulLogin();
        } else {
            alert('Wrong credentials!');
        }
    };

    return (
        <React.Fragment>
            <form onSubmit={onLoginSubmitted}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={changeUsernameHandler} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={changePasswordHandler} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;
