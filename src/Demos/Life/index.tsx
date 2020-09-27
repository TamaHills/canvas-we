import * as React from "react";
import { Link } from "react-router-dom";
import { Canvas, CanvasObject } from "../../Canvas";
import { createLifeArray } from "./util";

export function Life() {
  let frames = 0;
  let life = createLifeArray(10, 10);

  function setup(ctx: CanvasObject) {
    ctx.size(600, 600);
    ctx.background = "black";
  }

  function draw(ctx: CanvasObject) {
    ctx.background = "black";
    life.forEach((row, y) => {
      row.forEach((life, x) => {
        ctx.fill = life ? "white" : "dodgerblue";
        ctx.rect(
          x * (ctx.width / 10 + 1),
          y * (ctx.height / 10 + 1),
          ctx.width / 10 - 2,
          ctx.height / 10 - 2
        );
      });
    });
  }
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <Canvas setup={setup} draw={draw} />
    </div>
  );
}
