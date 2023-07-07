import { useEffect } from "react";
import Two from "two.js";
import { fullRotation } from "../../utils/creative-coding-helpers";

export default function Sticks() {
  useEffect(() => {
    if (document.querySelector("section.sticks path")) return;
    const container = document.querySelector('section.sticks')
    const params = {width:500, height:500}

    const two = new Two(params)
    two.appendTo(container)

    const numberOfShapes = 32
    const plotRadius = 150

    const shapes = []

    for (let i=0; i < numberOfShapes; i = i +1) {
      const angle = fullRotation * i / numberOfShapes
      
      const x = plotRadius * Math.cos(angle)
      const y = plotRadius * Math.sin(angle)
      
      const shape = two.makeRectangle(x, y, 150, 10)
      shape.noStroke()
      shape.fill = '#DDCAD9'
      shape.rotation = angle
      
      shapes.push(shape)
    }

    const group = two.makeGroup(shapes)
    group.translation.set(250, 250)

    two.bind('update', function (){
      group.rotation += 0.005
      
      shapes.forEach(shape => {
        shape.rotation += 0.025
      })
    })

    two.play()
    
  });

  return (
    <div className="sticks">
      <section className="sticks" />
    </div>
  );
}
