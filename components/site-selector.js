import { useEffect, useState } from "react";
import IllustrationGrid from "./illustration-grid";
import WebDevGrid from "./web-dev-grid";
import Link from "next/link";
let elementClicked = false;

export default function SiteSelector({ illoCmsContent }) {
  let [leftValue, setLeftValue] = useState(-50);
  let [hoveredOption, setHoveredOption] = useState(false);
  const handleHover = (el = false, leftV = -50) => {
    if (elementClicked) return;
    setHoveredOption(el);
    setLeftValue(leftV);
  };
  const handleCLick = (el) => {
    elementClicked = !elementClicked;
    if (el && hoveredOption === el) {
      if (el === "illo") setLeftValue(-100);
      if (el === "web") setLeftValue(0);
    }
  };
  useEffect(() => {
    return () => {
      elementClicked = false;
    };
  }, []);
  return (
    <div className="fixed flex flex-col sm:flex-row justify-evenly w-[100%] top-[0]">
      <div
        className={`bg-[#F17B0D] fixed w-[100vw] top-[0] h-[100%] transition-all duration-[400ms]`}
        style={{
          left: leftValue + "%",
          right: leftValue + 100 + "%",
        }}
      />
      <div
        style={{ left: leftValue + 100 + "%" }}
        className="fixed transition-all duration-[400ms] w-[90%] mx-[5%] mt-[32px] top-[0] mob:hidden sm:block"
      >
        <IllustrationGrid contents={illoCmsContent} />
      </div>
      <div
        style={{
          left: leftValue + "%",
        }}
        className="fixed transition-all duration-[400ms] w-[90%] mx-[5%] mt-[32px] top-[0] mob:hidden sm:block"
      >
        <WebDevGrid contents={[1, 2, 3]} />
      </div>
      <div
        onMouseEnter={() => handleHover("web", -20)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("web")}
        className="absolute transition-all translate-x-[-50%] top-[0] mob:hidden sm:block"
        style={{
          left: hoveredOption === "illo" ? leftValue + 90 + "%" : "25%",
        }}
      >
        Web Developer
      </div>
      <div className="flex flex-col items-center sm:hidden fixed top-[33%] left-[50%] translate-x-[-50%]">
        <Link href={`/web`} className="mb-[32px]">
          Web Developer
        </Link>
        <Link href={`/illustration`}>
          Illustrator
        </Link>
      </div>
      <div
        onMouseEnter={() => handleHover("illo", -80)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("illo")}
        className="absolute transition-all translate-x-[50%] top-[0] mob:hidden sm:block"
        style={{
          right:
            hoveredOption === "web" ? (elementClicked ? "-10%" : "10%") : "25%",
        }}
      >
        Illustrator
      </div>
    </div>
  );
}
