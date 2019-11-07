import React from 'react';

import './App.css';

import Heading from "./components/heading";
import Form from "./components/form";
import Forecast from "./components/forecast";
import Test from "./components/test";
import Form2 from "./components/form2";
import { BrowserRouter, Route, } from "react-router-dom";


const api_key = "8daa7b1aaccb1c32e00f127c7ed34100";

class App extends React.Component {

  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      error: "",
      showWeather: false,
      dates: [],
      maxTemp: [],
      minTemp: [],
      condition: [],
      icons: [],
      day: [],
      eachDayListForFiveDays: []
    }
  }

  getWeather = async (e) => {
    console.log("here");
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${api_key}`)
    const response = await api_call.json();

    let eachDayListForFiveDays = [];
    let dates = [];
    let maxTemp = [];
    let minTemp = [];
    let condition = [];
    let icons = [];
    let day = [];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    for (let i = 0; i < response.list.length; i += 8) {
      eachDayListForFiveDays.push(response.list.slice(i, i + 8));
    }

    for (let i = 0; i < 5; i++) {
      dates.push(eachDayListForFiveDays[i][0].dt_txt.substr(0, 10));
      day.push(days[new Date(eachDayListForFiveDays[i][0].dt_txt.substr(0, 10)).getDay()]);
      maxTemp.push(this.getMaxOrMinTemp(eachDayListForFiveDays[i], true));
      minTemp.push(this.getMaxOrMinTemp(eachDayListForFiveDays[i], false));
      condition.push(eachDayListForFiveDays[i][4].weather[0].description);
      icons.push("http://api.openweathermap.org/img/w/" + eachDayListForFiveDays[i][4].weather[0].icon + ".png");

    }



    if (city && country) {
      this.setState(
        {
          showWeather: true,
          eachDayListForFiveDays: eachDayListForFiveDays,
          dates: dates,
          maxTemp: maxTemp,
          minTemp: minTemp,
          condition: condition,
          icons: icons,
          day: day,
        }
      )

    }
    else {
      this.setState({
        error: "Kindly fill out all the input fields..."
      })
    }
  }


  getMaxOrMinTemp = (arr, isMax) => {
    let value = isMax ? -1000 : 1000;
    for (let i = 0; i < arr.length; i++) {
      value = isMax ? Math.max(value, arr[i].main.temp_max) : Math.min(value, arr[i].main.temp_max);
    }
    return value;
  }

  render() {
    return (

      <div className="container">
        <BrowserRouter>
          <Route path="/getDetails" component={Test} />
        </BrowserRouter>

        <Heading />
        <Form
          loadWeather={this.getWeather}
        />
        <div className="weather">
          <Forecast
            state={this.state}
          />


        </div>

        {this.state.showWeather ?
          <Form2-
            state={this.state}
          />
          : null}
      </div>
    );

  }
}





export default App;
