import React from 'react';

function Juice (props){
    return(
      <div className="Juice">
        <h1>250 = {props.small}</h1>
        <h1>500ml = {props.halfliter}</h1>
        <h1>1 Liter = {props.liter}</h1>
        <h1>1.5 Liter = {props.literhalf}</h1>
      </div>
    )
}

export default Juice;