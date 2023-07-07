import { useEffect } from "react";
import {
  mapAndClamp,
  easeInOutCubic,
  halfRotation,
} from "../../utils/creative-coding-helpers";
import Two from "two.js";

export default function Delay() {
  useEffect(() => {
    if (document.querySelector("section.delay path")) return;
    const container = document.querySelector("section.delay");

    const params = {
      width: 400,
      height: 400,
    };

    const two = new Two(params);
    two.appendTo(container);

    // config for our animation
    const numberOfShapes = 40;
    const shapeIncr = 20;
    const shapes = [];
    const loopDuration = 60 * 4;
    const aDelay = 1 / 120;
    const outerColour = "#D1B1CB";
    const innerColour = "#7C616C";

    // make shapes
    for (let i = 0; i < numberOfShapes; i++) {
      const size = (numberOfShapes - i) * shapeIncr;
      const shape = two.makeRectangle(200, 200, size, size);
      shape.fill = i % 2 === 0 ? outerColour : innerColour;
      shape.noStroke();

      shapes.push(shape);
    }

    two.bind("update", function (frameCount) {
      const currentFrame = frameCount % loopDuration;
      const t = currentFrame / loopDuration;

      shapes.forEach((shape, i) => {
        const aStart = aDelay * (numberOfShapes - i);
        const aEnd = aDelay * i;
        const u = mapAndClamp(t, aStart, 1 - aEnd, 0, 1);
        shape.rotation = easeInOutCubic(u) * halfRotation;
      });
    });

    two.play();
  });

  return (
    <div className="delay">
      <section className="delay" />
    </div>
  );
}
