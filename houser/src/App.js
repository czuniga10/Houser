import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Dash from './components/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route path='/register'/>
        <Route path='/dashboard' component={Dash}/>
        <Route path='/stepone'/>
        <Route path='/steptwo'/>
        <Route path='/stepthree'/>
        <Route path='/stepfour'/>
      </div>
    );
  }
}


