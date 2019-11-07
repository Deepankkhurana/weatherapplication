import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forecast from "./components/forecast";
import Test from "./components/test";
import EachDayDetails from "./components/EachDayDetails.js";

import {BrowserRouter, Route,} from "react-router-dom";

ReactDOM.render(
    
<BrowserRouter>
      
<Route path="/" component={App} exact/>
<Route path="/getDetails" component={Test}/>
<Route path="/details/:day" component={EachDayDetails}/>
<Route 
    path="/new1" 
    render={(props) => <Forecast state={this.state}/>}
    />

</BrowserRouter>

, document.getElementById('root'));


