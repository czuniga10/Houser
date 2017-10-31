import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/header.css';
import houserWhite from '../images/houser-logo-white.png';


export default class Header extends Component {
  render() {
    return (
      <div className="header-container">

         <div className="header-left">
            <img src={houserWhite} alt="white houser logo" className="houser-white-logo"/>
            <p><strong>Houser</strong> Dashboard</p>
        </div>

        <div className="header-right">
            <Link to="/" className="logout">Logout</Link>
        </div>

      </div>
    );
  }
}