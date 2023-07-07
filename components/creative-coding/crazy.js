import { useEffect } from "react";
import Two from "two.js";
import {
  easeInOutCubic,
  mapAndClamp,
  halfRotation,
} from "../../utils/creative-coding-helpers";

export default function Crazy() {
  useEffect(() => {
    const container = document.querySelector("section.crazy");
    if (document.querySelector("section.crazy path")) return;

    const params = {
      width: 500,
      height: 500,
    };

    const two = new Two(params);
    two.appendTo(container);

    // config for our animation
    const numberOfShapes = 40;
    const shapeIncr = 20;
    const shapes = [];
    const loopDuration = 60 * 4;
    const aDelay = 1 / 120;
    const outerColour = "#38A3A5";
    const innerColour = "#22577A";

    // make shapes
    for (let i = 0; i < numberOfShapes; i++) {
      const size = (numberOfShapes - i) * shapeIncr;
      const shape = two.makeRectangle(250, 250, size, size);
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

        shape.rotation =
          i % 2 === 0
            ? easeInOutCubic(u) * halfRotation
            : -1 * (easeInOutCubic(u) * halfRotation);
      });
    });

    two.play();
  });

  return (
    <div className="crazy">
      <section className="crazy" />
    </div>
  );
}
