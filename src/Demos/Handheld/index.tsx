import * as React from "react";
import { Link } from "react-router-dom";
import { Canvas, CanvasObject } from "../../Canvas";
import "./styles.scss";

export function HandheldGame() {
  return (
    <div id="container">
      <Link to="/">home</Link>
      <Handheld />
    </div>
  );
}

export function Handheld() {
  return (
    <div id="body">
      <div id="body-line" />
      <Screen />
      <div id="controls">
        <div id="dpad">
          <div id="up-down" />
          <div id="left-right" />
        </div>
        <div id="buttons">
          <div id="a" />
          <div id="b" />
        </div>
      </div>
      <div id="start-select">
        <div id="start" />
        <div id="select" />
      </div>
    </div>
  );
}

function setup(canvas: CanvasObject) {
  canvas.size(300, 275);
  canvas.background = "dodgerblue";
}

function draw(canvas: CanvasObject) {
  canvas.clear();
}

export function Screen() {
  return (
    <div id="screen">
      <div id="display">
        <Canvas setup={setup} draw={draw} />
      </div>
    </div>
  );
}
