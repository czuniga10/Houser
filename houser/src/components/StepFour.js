import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/stepFour.css';

import Header from './Header';


export default class StepFour extends Component {
    render() {
      return (
        <div className="step-four">
            <Header />

            <div>
                <h2>Add New Listing</h2>
                <button><Link to="/dashboard">Cancel</Link></button>
            </div>

            <h5>Step 4</h5>

            <div>
                <img />
                <img />
                <img />
                <img />
            </div>

            <div>
                <h4>House Name</h4>
                <h4>House Price</h4>
                <h4>House Description</h4>
            </div>

            <button><Link to="/dashboard">Complete</Link></button>
  
        </div>
      );
    }
  }