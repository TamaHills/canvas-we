import * as React from "react";
import { CanvasObject } from "./canvas-api";

type CanvasFn = (canvas: CanvasObject) => boolean | void;

interface CanvasProps {
  draw: CanvasFn;
  setup: CanvasFn;
}

export const Canvas = React.memo(
  function({ draw, setup }: CanvasProps) {
    let canvas = React.useRef<HTMLCanvasElement>(null);
    let canvasElement = <canvas ref={canvas} />;
    // let ctx: CanvasObject | null = null;
    // function drawOnCanvas() {
    //   if (ctx) {
    //     draw(ctx);
    //   } else {
    //     ctx = new CanvasObject(canvas.current as HTMLCanvasElement );
    //     setup(ctx);
    //   }
    //   window.requestAnimationFrame(drawOnCanvas);
    // }
    // window.requestAnimationFrame(drawOnCanvas);
    React.useEffect(() => {
      if (canvas) {
        CanvasObject.initCanvas(
          setup,
          draw,
          canvas.current as HTMLCanvasElement
        );
      }
    }, [canvas]);

    return canvasElement;
  },
  () => false
);
