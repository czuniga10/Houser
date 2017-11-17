import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiHost, apiPort } from '../config/api.config';

import '../CSS/header.css';
import houserWhite from '../images/houser-logo-white.png';


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    }
  }

  userLogout = () => {
    axios
      .get(`${apiHost}:${apiPort}/api/auth/logout`).then(() => {
        this.props.history.push('/')
      })
  }


  render() {
    return (
      <div className="header-container">

         <div className="header-left">
            <img src={houserWhite} alt="white houser logo" className="houser-white-logo"/>
            <p><strong>Houser</strong> Dashboard</p>
        </div>

        <div className="header-right">
            <a 
              className="logout" 
              onClick={this.userLogout}>Logout
            </a>
        </div>

      </div>
    );
  }
}