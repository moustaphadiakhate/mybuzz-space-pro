import React from "react";
import Buzz from "./Buzz";

const Buzzlist = ({buzz}) => {
  console.log(buzz);
  return (
    <div className="buzz-list section">
      {buzz && buzz.map(buzz => {
        return(
          <Buzz buzz = {buzz} key={buzz.id}/>
        )
      })}
    </div>
  );
};

export default Buzzlist;
