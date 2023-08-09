import { useState } from "react";

export default function SiteSelector(props) {
  let [leftValue, setLeftValue] = useState(-50);
  let [hoveredOption, setHoveredOption] = useState(false);
  let elementClicked = false;
  const handleHover = (el = false, leftV = -50) => {
    if (elementClicked) return;
    setHoveredOption(el);
    setLeftValue(leftV);
  };
  const handleCLick = (el) => {
    elementClicked = !elementClicked;
  };
  return (
    <div className="fixed flex flex-col md:flex-row justify-evenly w-[100%]">
      <div
        className={`bg-[#F17B0D] fixed w-[100vw] h-[100%] transition-all duration-[400ms]`}
        style={{
          left: leftValue + "%",
          right: leftValue + 100 + "%",
        }}
      />
      <div
        onMouseEnter={() => handleHover("illo", -20)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("illo")}
        className="absolute transition-all translate-x-[-50%]"
        style={{
          left: hoveredOption === "web" ? leftValue + 90 + "%" : "25%",
        }}
      >
        Illustrator
      </div>
      <div
        onMouseEnter={() => handleHover("web", -80)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("web")}
        className="absolute transition-all translate-x-[50%]"
        style={{
          right: hoveredOption === "illo" ? "10%" : "25%",
        }}
      >
        Web Developer
      </div>
    </div>
  );
}
