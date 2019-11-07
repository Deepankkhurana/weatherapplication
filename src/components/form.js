import React from 'react';

const Form = (props) => {

    return (

        <div>
            <form onSubmit={props.loadWeather}>
                <input type="text" name="city" placeholder="Choose a City"></input>
                <input type="text" name="country" placeholder="Choose a Country"></input>
                <button>Get Weather</button>
            </form>
        </div>

    )

}


export default Form;