import React from "react";
import "./style.css";
import SlotM from "./Slot";

const App = () => {
  return (
    <>
      <h1 style={{ fontWeigth: "bolder", color: "red" }}>Slot Machine Game</h1>
      <SlotM x="c" y="b" z="a" />
      <SlotM x="t" y="t" z="t" />
      <hr />
    </>
  );
};

export default App;
