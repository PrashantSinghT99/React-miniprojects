import React from "react";
// import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";
const Cards = (props) => {
  // {`../images/${props.img}`}
  return (
    <div className="cards">
        <img className="card-img" src={`../images/${props.img}`} />
        <div className="rating">
        <img src={star}/>
        <p>{props.rating}</p>
        <p>({props.reviewCount})•{props.location}</p>
      </div>
      <p>{props.description}</p>
      <p className="bold">From ${props.price}/person</p>

    </div>
  );
};

export default Cards;
