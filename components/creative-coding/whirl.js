import { useEffect } from "react";
import Two from "two.js";
import { fullRotation } from "../../utils/creative-coding-helpers";

export default function Whirl() {
  useEffect(() => {
    if (document.querySelector("section.whirl path")) return;
    const container = document.querySelector("section.whirl");
    const params = { width: 500, height: 500 };

    const two = new Two(params);
    two.appendTo(container);

    const numberOfShapes = 12;
    const plotRadius = 150;

    const shapes = [];

    for (let i = 0; i < numberOfShapes; i = i + 1) {
      const angle = (fullRotation * i) / numberOfShapes;

      const x = plotRadius * Math.cos(angle);
      const y = plotRadius * Math.sin(angle);

      const shape = two.makeRectangle(x, y, 50, 50);
      shape.noStroke();
      shape.fill = "#80ED99";
      shape.opacity = i >= 5 ? (i / 10) : 1 - (i / 10);
      shape.rotation = angle;

      shapes.push(shape);
    }

    const group = two.makeGroup(shapes);
    group.translation.set(250, 250);

    two.bind("update", function () {
      group.rotation += 0.005;

      shapes.forEach((shape) => {
        shape.rotation += -0.025;
      });
    });

    two.play();
  });

  return (
    <div className="whirl">
      <section className="whirl" />
    </div>
  );
}
