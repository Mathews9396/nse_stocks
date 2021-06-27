import React, { useState } from 'react'
import axios from 'axios';
import '../../App.css';

function Authentication() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const register = () => {
    axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      alert(response.data.message);
    }).catch((err) => {
        console.log("error - ",err);
        throw err;
    })
  }

  const login = () => {
    axios.post('http://localhost:3001/login', {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response.data);
        // localStorage.setItem("user",JSON.stringify(response.data));
        alert("User authenticated");
      }
      else {
        setLoginStatus(response.data.error);
        alert("User not found");
      }
    }).catch((err) => {
      console.log("error - ", err);
      return Promise.reject(err);
    })
  }

  return (
    <div className="authentication">
      <h3 className="authentication-header">Create an account or login with your existing account</h3>

      <div className="registration wrapper-1">
        <h3>Create an Account</h3>
        <div className="authentication-form">
          <div className="username-form">
            <label>Username</label>
            <input
              type="text"
              className="input-box-1"
              onChange={(e) => { setUsernameReg(e.target.value) }}
            />
          </div>
          <div className="password-form">
            <label>Password</label>
            <input
              type="password"
              className="input-box-2"
              onChange={(e) => { setPasswordReg(e.target.value) }}
            />
          </div>
          <button className="submit-button" onClick={register}>Sign up</button>
        </div>
      </div>

      <div className="login wrapper 2">
        <h3>Login to your Account</h3>
        <div className="authentication-form">

          <div className="username-form">
            <label>Username</label>
            <input
              type="text"
              className="input-box-1"
              onChange={(e) => { setUsername(e.target.value) }}
            />
          </div>

          <div className="password-form">
            <label>Password</label>
            <input
              type="password"
              className="input-box-2"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <button className="submit-button" onClick={login}>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Authentication;