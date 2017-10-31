import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/stepThree.css';

import Header from './Header';


export default class StepThree extends Component {
    render() {
      return (
        <div className="step-three">
            <Header />

            <div>
                <h2>Add New Listing</h2>
                <button><Link to="/dashboard">Cancel</Link></button>
            </div>

            <h5>Step 3</h5>

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

            <button><Link to="/stepfour">Next Step</Link></button>
  
        </div>
      );
    }
  }