import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      .post('')
  }


  render() {
    return (
      <div className="header-container">

         <div className="header-left">
            <img src={houserWhite} alt="white houser logo" className="houser-white-logo"/>
            <p><strong>Houser</strong> Dashboard</p>
        </div>

        <div className="header-right">
            <Link 
              to="/" 
              className="logout" 
              onClick={this.userLogout}>Logout
            </Link>
        </div>

      </div>
    );
  }
}