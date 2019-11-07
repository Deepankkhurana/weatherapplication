import React from 'react';

import { NavLink } from "react-router-dom";

const Form2 = (props) => {

    return (
        <div>
            <form>
                <NavLink
                    to={{
                        pathname: "/getDetails",
                        state: props.state
                    }}
                ><button>Get Details</button></NavLink>
            </form>
        </div>
    )

}

export default Form2;
