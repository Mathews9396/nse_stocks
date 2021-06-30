import React, { useState } from 'react'
import http from '../../http-common';
import '../../App.css';
import './welcome.css';


function Register() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    // const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        http.post(`/register`, {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response.data);
            alert(response.data.message);
        }).catch((err) => {
            console.log("error - ", err);
            throw err;
        })
    }


    return (

        <div className="registration wrapper-1">
            <h3 heading="auth-form">Create an Account</h3>
            <div className="authentication-form">
                <div className="username-form">
                    <label className="input-label">Username</label>
                    <input
                        type="text"
                        className="input-box-1"
                        onChange={(e) => { setUsernameReg(e.target.value) }}
                    />
                </div>
                <div className="password-form">
                    <label className="input-label">Password</label>
                    <input
                        type="password"
                        className="input-box-2"
                        onChange={(e) => { setPasswordReg(e.target.value) }}
                    />
                </div>
                <button className="submit-button" onClick={register}>Sign up</button>
            </div>
        </div>

    )
}

export default Register;