import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/login.css';
import houser from '../images/houser-logo-blue.png';


export default class Login extends Component {
  render() {
    return (
      <div className="login">

        <img src={houser} alt="houser logo"/>

        <div className="username">
          <input placeholder="Username"></input>
        </div>

        <div className="password">
          <input type="password" placeholder="Password"></input>
        </div>

        <div className="login-register">
          <button className="login-button"><Link to="/dashboard" className="login-link">Login</Link></button>
          <button className="register-button"><Link to="/register" className="regi-link">Register</Link></button>
        </div>

      </div>
    );
  }
}
