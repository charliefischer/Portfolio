import { useEffect } from "react";
import Two from "two.js";
import {
  easeInOutCubic,
  mapAndClamp,
} from "../../utils/creative-coding-helpers";

export default function Zipper() {
  useEffect(() => {
    if(document.querySelector("section.zipper path")) return;
    const container = document.querySelector("section.zipper");

    const params = {
      width: 400,
      height: 400,
    };
    const two = new Two(params);
    two.appendTo(container);

    // config for our animation
    const numberOfShapes = 25;
    const shapes = [];
    const shapeMin = 0;
    const shapeMax = 400;
    const shapeDiff = shapeMax - shapeMin;
    const loopDuration = 4 * 60;
    const zipperColour = "#57CC99";
    // make shapes
    for (let i = 0; i < numberOfShapes; i++) {
      const x = 250;
      const y = 20 * i + 5;

      const shape = two.makeRectangle(x, y, shapeMin, 10);
      shape.fill = zipperColour;
      shape.noStroke();

      shapes.push(shape);
    }

    two.bind("update", function (frameCount) {
      // draw
      const currentFrame = frameCount % loopDuration;
      const t = currentFrame / loopDuration;

      shapes.forEach((shape, i) => {
        const aStart = 0.01 * (numberOfShapes - i);
        const aEnd = 0.01 * i;

        let u =
          t < 0.5
            ? mapAndClamp(t, aStart, 0.5 - aEnd, 0, 1)
            : mapAndClamp(t, 0.5 + aStart, 1 - aEnd, 1, 0);

        shape.width = shapeMin + shapeDiff * easeInOutCubic(u);
      });
    });

    two.play();
  });

  return (
    <div className="zipper">
      <section className="zipper" />
    </div>
  );
}
