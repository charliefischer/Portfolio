import { useEffect } from "react";

export default function SectionSeparator() {
  useEffect(() => {
    const line = document.getElementById("svg-line");
    console.log("line", line);
    if (!line) return;
    let coords = {
      x: 0,
      y: 0,
    };
    let width = 0;
  });
  // document.addEventListener("mouseover", (event) => {
  //   console.log("mouseover");
  //   coords.x = event.clientX;
  //   coords.y = event.clientY;
  //   width = coords.x / window.innerWidth;
  //   updateCoords(coords, line, width);
  //   console.log(coords);
  // });
  // document.addEventListener("mouseout", (event) => {
  //   gsap.to(path, {
  //     ease: EqualStencilFunc.easeOut.config(1, 0.3),
  //     attr: {
  //       d: "M250,0 Q250,250 250, 500",
  //     },
  //   });
  // });
  const updateCoords = (coords, node, width) => {
    coords.x = width * 500;
    node.setAttribute("d", `M250,0 Q${coords.x},${coords.y} 250,500`);
  };
  return (
    <hr className="border-2" />
    // <div className="width-[100%] relative h-[42px]">
    //   <svg
    //     id="svg-line"
    //     viewBox="0 0 500 500"
    //     preserveAspectRatio="xMidYMid meet"
    //   >
    //     <path id="curve" d="M250,0 Q250,250 250, 500" />
    //   </svg>
    // </div>
  );
}
