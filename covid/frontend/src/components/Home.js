import React, { Component } from "react";
import About from "./About";
import Map from "./Donate";
import Testing from "./Testing";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Clock from 'react-live-clock';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], //Uses an array to hold the API information 
            isLoaded: false,

        }
    }
    componentDidMount() {

        fetch('https://api.covidtracking.com/v1/states/current.json') //Fetching the information from the API
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true, //Checks if the API is fully loaded 
                    items: json,
                })
            });

    }
    render() {
        var { isLoaded, items } = this.state;
        document.title = 'Covid | Home'
        
        var CurrentDate = new Date().toLocaleDateString(); //Uses React's in built date function 
      
        return (
            <div className="Home">
                <center>
                    <h1>Covid Cases</h1>
                    <h5>{CurrentDate}-<Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></h5>
                  
                   
                </center>
                <center> <table border="3px">
                    <th width = "5%">State</th>
                    <th width="5%">Positive</th>
                    <th width="5%">Negative</th>
                    <th width = "5%">Recovered</th>
                    <th width="5%">Last Updated</th>
                    {items.map(item => ( //Using the map to loop through the API with the key and value 

                        <tr key={item.date}>
                            <td>{item.state}</td>
                            <td>{item.positive}</td>
                            <td>{item.negative}</td>
                            <td>{item.recovered}</td>
                            <td>{item.lastUpdateEt}</td>
                        </tr>

                    ))}


                </table>
                </center>



            </div>
        );
    }

}
