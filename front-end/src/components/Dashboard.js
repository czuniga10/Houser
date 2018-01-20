import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../CSS/dashboard.css';

import houser from '../images/houser-logo-blue.png';
import house from '../images/house.png';
import deleteX from '../images/delete_icon.png';
import Header from './Header';
import StepOne from './StepOne';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: []
        }
    }

    getAllProperties = () => {
        axios   
            .get('')
            .then((response) => {
                this.setState({properties: response.data});
                console.log("Hello! I am a response: ", response)
            })
    }

    componentWillMount() {
        this.getAllProperties();
    }




  render() {
    return (
      <div className="dash">

        <Header />

        <button className="new-house"><Link to='/stepone' className="new-house-link">Add New House</Link></button>

        <div className="house-filter-container">
            <p>List houses with price greater than: $</p>
            <input></input>
            <button className="filter"><a href="">Filter</a></button>
            <button className="reset"><a href="">Reset</a></button>
        </div>

        <div className="seperating-line"></div>

        <div className="house-listings"><h3>House Listings</h3></div>

        <div className="listings">

            <img src={house} alt="farm house" className="farm-house"/>

            <div className="listings-info">

                <div className="list-one">
                    <h5>Name:</h5>
                    <h5>Price:</h5>
                    <h5>Description:</h5>
                </div>

                <div className="list-two">
                    <h5>Price per SqFt:</h5>
                    <h5>SqFt:</h5>
                    <h5>Monthly Mortgage:</h5>
                    <h5>Beds:</h5>
                    <h5>Bath:</h5>
                </div>

                <div className="list-three">
                    <h5>Address:</h5>
                    <h5>City:</h5>
                    <h5>State:</h5>
                    <h5>Zip:</h5>
                    <h5>Year Built:</h5>
                </div>
                
                <img src={deleteX} alt="x in top right corner" className="delete-x"/>

            </div>

            {/* <div>
                {this.state.properties.map(property => {
                    return <div>{property.city}</div>
                })}
            </div> */}

        </div>

      </div>
    );
  }
}