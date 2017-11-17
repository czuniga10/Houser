import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/stepFour.css';

import Header from './Header';
import active from '../images/step_active_blue.png';
import complete from '../images/step_completed_blue.png';


export default class StepFour extends Component {
  

    render() {
      return (
        <div className="step-four">
            <Header />

            <div className="stepfour-top">
            <h3>Add New Listing</h3>
            <button className="cancel"><Link to="/dashboard" className="cancel-link">Cancel</Link></button>
        </div>

        <h4>Step 4</h4>

        <div className="step-dots">
            <img src={complete} alt="step completed blue circle"/>
            <img src={complete} alt="step complete blue circle"/>
            <img src={complete} alt="step complete blue circle"/>
            <img src={active} alt="step inactive light blue circle"/>
        </div>

            <div className="img-preview-input">
                <div className="preview"><h5>Preview</h5></div>
                <h4>Image URL</h4>
                <input
                type="text"
                    >
                </input>
            </div>

            <div className="previous-next-buttons">
                <button className="previous-step"><Link to="/stepthree" className="previous-step-link">Previous Step</Link></button>
                <button className="complete"><Link to="/dashboard" className="complete-link">Complete</Link></button>
            </div>
        </div>
      );
    }
  }