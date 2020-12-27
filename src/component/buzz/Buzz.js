import React from "react";

const Buzz = ({buzz}) => {

  return (
    <div className="card z-depth0 buzz-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{buzz.title}</span>
        <p>Fait par : </p>
        <p className="grey-text">Date </p>
      </div>
    </div>
  );
};

export default Buzz
