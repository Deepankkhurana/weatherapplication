import React from 'react';

const Test = (props) => {

    return (
        
        <div className="wrapper">
            <table>
            {props.location.state.dates.map((value, index) => {
                return (
                  
               <div key={index} className="fivedays">

                      {props.location.state.days[index]}<br></br>
                      {props.location.state.dates[index]}<br></br>
                       {props.location.state.minTemp[index]}<br></br>
                        {props.location.state.maxTemp[index]}<br></br>
                       {props.location.state.condition[index]}<br></br>
                       <img src = {props.location.state.icons[index]} alt ="icon"/><br></br>
                    </div>
                )
              })}
            </table>
            
           

        </div>
    )
}

export default Test;


