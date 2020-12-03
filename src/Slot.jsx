import React from "react";
import Match from "./Match";
import Notmatch from "./Notmatch";

const SlotM = props => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <p className="letter">
          {x} {y} {z}
        </p>
        <h2>Mathed String</h2>
      </>
    );
  } else {
    return (
      <>
        {x} {y} {z}
        <h2>Not Mathed String</h2>
      </>
    );
  }
};

export default SlotM;
