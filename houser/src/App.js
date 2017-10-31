import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Regi from './components/Register';
import Dash from './components/Dashboard';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route path='/register' component={Regi}/>
        <Route path='/dashboard' component={Dash}/>
        <Route path='/stepone' component={StepOne}/>
        <Route path='/steptwo' component={StepTwo}/>
        <Route path='/stepthree' component={StepThree}/>
        <Route path='/stepfour' component={StepFour}/>
      </div>
    );
  }
}


