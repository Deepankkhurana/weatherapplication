import React from 'react';


const EachDayDetails = (props) => {
    return (
        <div className="wrapper">

            <table>
                {props.location.state.eachDayListForFiveDays[parseInt(props.match.params.day)].map((value, index) => {
                    return (
                            <div key={index} className="fivedays center">

                                {value.dt_txt}<br></br>
                                {value.main.temp}<br></br>
                                {value.weather[0].description}<br></br>
                                <img src={"http://api.openweathermap.org/img/w/" + value.weather[0].icon + ".png"} alt="icon" /><br></br>
                            </div>
                    )
                })}
            </table>



        </div>
    )
}

export default EachDayDetails;