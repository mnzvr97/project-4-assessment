import React, { Component } from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    <button
      className={props.selected == 1 ? "selected" : ""}
      value={1}
      onClick={props.changeSelected}
    >
      {props.selected == 1 ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
    </button>
    <button
      className={props.selected == 2 ? "selected" : ""}
      value={2}
      onClick={props.changeSelected}
    >
      {props.selected == 2 ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}
    </button>
    <button
      className={props.selected == 3 ? "selected" : ""}
      value={3}
      onClick={props.changeSelected}
    >
      {props.selected == 3 ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}
    </button>
    <button
      className={props.selected == 4 ? "selected" : ""}
      value={4}
      onClick={props.changeSelected}
    >
      {props.selected == 4 ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}
    </button>
  </div>
);

export default CircleSelector;
