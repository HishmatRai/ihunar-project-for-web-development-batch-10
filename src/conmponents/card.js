import React from "react";
const Card = (props) => {
  return (
    <div className="card-container">
      {props.data.map((value, index) => {
        return (
          <div key={index}>
            <img src={value.icon} />
            <h3>{value.heading}</h3>
            <p>{value.paragraph}</p>
            <button>View Details</button>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
