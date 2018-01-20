import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Dash from './components/Dashboard';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houseName: "",
      housePrice:  "",
      houseDescription: "",
      sqFt: "",
      monthly: "",
      bath: "",
      address: "",
      city: "",
      my_state: "",
      zip: "",
      year: "",
      imageURL: "",

    }
  }

  onChange() {
    
  } 

  onSubmit() {

  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => {
          return <Login 
            { ...props }
            state={ this.state }
            onChange={ this.onChange }    
          />
        }}/>
        <Route path='/dashboard' render={(props) => {
          return <Dash 
            { ...props }
            state={ this.state }
            onChange={ this.onChange }  
          />
        }}/>
        <Route path='/stepone' render={(props) => {
          return <StepOne 
            { ...props }
            state={ this.state }
            onChange={ this.onChange }  
          />
        }}/>
        <Route path='/steptwo' render={(props) => {
          return <StepTwo 
            { ...props }
            state={ this.state }
            onChange={ this.onChange }  
          />
        }}/>
        <Route path='/stepthree' render={(props) => {
          return <StepThree 
            { ...props }
            state={ this.state }
            onChange={ this.onChange }  
          />
        }}/>
        <Route path='/stepfour' render={(props) => {
          return <StepFour 
            { ...props }
            state={ this.state }
            onChange={ this.onChange }  
            onSubmit={ this.onSubmit }
          />
        }}/>
      </div>
    );
  }
}


