import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/stepOne.css';

import Header from './Header';
import active from '../images/step_active_blue.png';
import inactive from '../images/step_inactive_blue.png';
import complete from '../images/step_completed_blue.png';


export default class StepOne extends Component {
    render() {
      return (
        <div className="step-one">
            <Header />

            <div className="stepone-top">
                <h3>Add New Listing</h3>
                <button className="cancel"><Link to="/dashboard" className="cancel-link">Cancel</Link></button>
            </div>

            <h4>Step 1</h4>

            <div className="step-dots">
                <img src={active} alt="step active blue circle"/>
                <img src={inactive} alt="step inactive light blue circle"/>
                <img src={inactive} alt="step inactive light blue circle"/>
                <img src={inactive} alt="step inactive light blue circle"/>
            </div>

            <div className="step-one-inputs">
                <h4>House Name</h4>
                <input></input>
                <h4>House Price</h4>
                <input></input>
                <h4>House Description</h4>
                <textarea className="descript"></textarea>
            </div>

            <button className="next-step"><Link to="/steptwo" className="next-step-link">Next Step</Link></button>
  
        </div>
      );
    }
  }