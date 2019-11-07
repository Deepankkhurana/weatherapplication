import React from 'react';
import { NavLink } from "react-router-dom";


const Forecast = (props) => {
    return (
        <div className="wrapper">

            <table>
                {props.state.dates.map((value, index) => {
                    return (

                        <NavLink to={{
                            pathname: "/details/"+index,
                            state: props.state
                        }}>
                            <div key={index} className="fivedays">

                               {props.state.day[index]}<br></br>
                                {props.state.dates[index]}<br></br>
                                Min {props.state.minTemp[index]} &#8451;<br></br>
                                Max {props.state.maxTemp[index]} &#8451;<br></br>
                                {props.state.condition[index]}<br></br>
                                <img src={props.state.icons[index]} alt="icon" /><br></br>
                            </div></NavLink>


                    )
                })}
            </table>



        </div>
    )
}

export default Forecast;