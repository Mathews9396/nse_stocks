import React, { useState } from 'react'
// import axios from 'axios';
import '../../App.css';
import './welcome.css';
import Register from './register.component';
import Login from './login.component';


function Welcome() {

  const [authForm, setAuthForm] = useState('login');

  const triggerRegister = () => {
    setAuthForm('register');
  }
  const triggerLogin = () => {
    setAuthForm('login')
  }

  return (
    <div className="welcome main-container">

      {/**Welcome message */}
      <div className="welcome-message">
        <h2>Welcome to <hr className="line-break"></hr>NSE-Stocks</h2>
      </div>

      <div className="authentication">
        <h3 className="authentication-header">Create an account or login with your existing account</h3>

        <div align="center" className="auth-form">
          <div className="auth-form-buttons">
            <div className="auth-form-button">
              <button className="register-button" onClick={triggerRegister}>Register</button>
            </div>
            <div className="auth-form-button">
              <button className="login-button" onClick={triggerLogin}>Login</button>
            </div>
          </div>
          <div>
            {authForm === 'login' && (
              <Login />
            )}
            {authForm === 'register' && (
              <Register />
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome;

/**
 const register = () => {
   http.post(`/register`, {
     username: usernameReg,
     password: passwordReg
   }).then((response) => {
     alert(response.data.message);
   }).catch((err) => {
     console.log("error - ", err);
     throw err;
   })
 }

 const login = () => {
   http.post(`/login`, {
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
*/