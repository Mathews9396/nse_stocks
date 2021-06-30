import React, { useState } from 'react'
import http from '../../http-common';
import '../../App.css';
import './welcome.css';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const [loginStatus, setLoginStatus] = useState('unauthorized');

    const login = () => {
        http.post(`/login`, {
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
            if (response.data.length!==0) {
                setLoginStatus('authenticated');
                localStorage.setItem("token",JSON.stringify(response.data.token));
                alert("User authenticated");
                setUsername('');
                setPassword('');
            }
            else {
                setLoginStatus('no-user');
                setUsername('');
                setPassword('');
            }
        }).catch((err) => {
            setLoginStatus('no-user');
            setUsername('');
            setPassword('');
            throw err;
        })
    }

    return (
        <div className="login wrapper 2">
            <h3 heading="auth-form">Login to your Account</h3>
            <div className="authentication-form">

                <div className="username-form">
                    <label className="input-label">Username</label>
                    <input
                        value={username}
                        type="text"
                        placeholder='username'
                        className="input-box-1"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>

                <div className="password-form">
                    <label className="input-label">Password</label>
                    <input  
                        value={password}
                        placeholder='password'
                        type="password"
                        className="input-box-2"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>

                <button className="submit-button" onClick={login}>Sign in</button>
            </div>
            {loginStatus==='authenticated' && (
                <h3>Logged in Successfully!</h3>
            )}
            {loginStatus==='no-user' && (
                <h3>User not found - Check your credentials or create an account</h3>
            )}
        </div>
    )
}

export default Login;