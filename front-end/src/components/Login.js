import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiHost, apiPort } from '../config/api.config';

import '../CSS/login.css';

import houser from '../images/houser-logo-blue.png';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state ={
      username: "",
      password: "",
    }
  }

  userRegister = () => {
    let {username, password} = this.state;
    axios
      .post(`${apiHost}:${apiPort}/api/auth/register`, {
        username,
        password,
      }).then(() => {
        this.props.history.push('/dashboard')
      })
  }

  userLogin = () => {
    let {username, password} = this.state;
    axios 
      .post(`${apiHost}:${apiPort}/api/auth/login`, {
        username,
        password
      }).then(() => {
        console.log('this.props', this.props)
        this.props.history.push('/dashboard')
      })
  }



  render() {
    return (
      <div className="login">

        <img src={houser} alt="houser logo"/>

        <div className="username">
          <input 
            type="text" 
            placeholder="Username"
            onChange={(e) => this.setState({username: e.target.value})}
            ></input>
        </div>

        <div className="password">
          <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => this.setState({password: e.target.value})}
            ></input>
        </div>

        <div className="login-register">

            <button onClick={this.userLogin} className="login-button">Login</button>


            <button onClick={this.userRegister} className="register-button">Register!</button>


        </div>

      </div>
    );
  }
}
