import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/stepThree.css';

import Header from './Header';
import active from '../images/step_active_blue.png';
import inactive from '../images/step_inactive_blue.png';
import complete from '../images/step_completed_blue.png';


export default class StepThree extends Component {
    render() {
      return (
        <div className="step-three">
            <Header />

            <div className="stepthree-top">
                <h3>Add New Listing</h3>
                <button className="cancel"><Link to="/dashboard" className="cancel-link">Cancel</Link></button>
            </div>

            <h4>Step 3</h4>

            <div className="step-dots">
                <img src={complete} alt="step completed blue circle"/>
                <img src={complete} alt="step complete blue circle"/>
                <img src={active} alt="step active blue circle"/>
                <img src={inactive} alt="step inactive light blue circle"/>
            </div>

            <div className="step-three-inputs">
                <div className="address">
                    <h4>Address</h4>
                    <input></input>
                </div>
                <div className="city-zip">
                    <h4>City</h4>
                    <input></input>
                    <h4>Zip</h4>
                    <input></input>
                </div>
              
                <div className="state-year">
                    <h4>State</h4>
                    <input></input>
                    <h4>Year Built</h4>
                    <input></input>
                </div>
               
            </div>

            <div className="previous-next-buttons">
                <button className="previous-step"><Link to="/steptwo" className="previous-step-link">Previous Step</Link></button>
                <button className="next-step"><Link to="/stepfour" className="next-step-link">Next Step</Link></button>
            </div>
  
        </div>
      );
    }
  }