import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/stepTwo.css';

import Header from './Header';
import active from '../images/step_active_blue.png';
import inactive from '../images/step_inactive_blue.png';
import complete from '../images/step_completed_blue.png';


export default class StepTwo extends Component {
    render() {
      return (
        <div className="step-two">
            <Header />

            <div className="steptwo-top">
                <h3>Add New Listing</h3>
                <button className="cancel"><Link to="/dashboard" className="cancel-link">Cancel</Link></button>
            </div>

            <h4>Step 2</h4>

            <div className="step-dots">
                <img src={complete} alt="step completed blue circle"/>
                <img src={active} alt="step inactive light blue circle"/>
                <img src={inactive} alt="step inactive light blue circle"/>
                <img src={inactive} alt="step inactive light blue circle"/>
            </div>

            <div className="step-two-inputs">
                <div>
                    <h4>Price per Sq. Ft.</h4>
                    <input></input>
                </div>
                <div>
                    <h4>House Sq. Ft.</h4>
                    <input></input>
                </div>
                <div>
                    <h4>Monthly Payment</h4>
                    <input></input>
                </div>
                <div>
                    <h4>Beds</h4>
                    <input></input>
                </div>
                <div>
                    <h4>Baths</h4>
                    <input></input>
                </div>
            </div>

            <div className="previous-next-buttons">
                <button className="previous-step"><Link to="/stepone" className="previous-step-link">Previous Step</Link></button>
                <button className="next-step"><Link to="/stepthree" className="next-step-link">Next Step</Link></button>
            </div>
  
        </div>
      );
    }
  }