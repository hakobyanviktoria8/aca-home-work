import React from "react";
function Cars(props) {
    return(
        <div className="car">
            <h1>{props.name}</h1>
            <p>Year: {props.year}</p>
        </div>
    )
}
export  default Cars