import React from "react";

export default function Dice(props) {
const dieStyle={
    backgroundColor: props.held===true?"#59E391":"none"
   }
  return (
 <div 
 className="dice"
  style={dieStyle}
  onClick={props.holdDice}
 >
    <div className="num">{props.die}</div>
    </div>
    
  );
}
