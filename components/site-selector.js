import { useEffect, useState } from "react";
import IllustrationGrid from "./illustration-grid";
import WebDevGrid from "./web-dev-grid";
import Link from "next/link";
import SectionSeparator from "./section-separator";
let elementClicked = false;

export default function SiteSelector({ illoCmsContent }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <img
        src="icons/arrow.png"
        width="32px"
        className="fixed top-[14px] z-[6] transition-all duration-[400ms] mob:hidden sm:block"
        style={{
          left: arrowLeftPostion + "%",
          transform: `rotate(${elementClicked ? 180 : 0}deg)`
        }}
        onMouseEnter={() => handleHover("web", -20)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("web")}
      />
      <img
        src="icons/arrow.png"
        width="32px"
        className="fixed top-[14px] z-[6] rotate-180 transition-all duration-[400ms] mob:hidden sm:block"
        style={{
          right: arrowRightPosition + "%",
          transform: `rotate(${elementClicked ? 0 : 180}deg)`
        }}
        onMouseEnter={() => handleHover("illo", -80)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("illo")}
      />
      <div
        className={`bg-[#F17B0D] fixed w-[100vw] top-[0] h-[100%] transition-all duration-[400ms]`}
        style={{
          left: leftValue + "%",
          right: leftValue + 100 + "%",
        }}
      /> */}

        {/* <div
        style={{ left: leftValue + 100 + "%" }}
        className="fixed transition-all duration-[400ms] w-[90%] mx-[5%] mt-[64px] top-[0] mob:hidden sm:block overflow-scroll h-[100%]"
        onMouseDown={() => handleCLick("illo")}
      >
        <IllustrationGrid contents={illoCmsContent} />
      </div>
      <div
        style={{
          left: leftValue + "%",
        }}
        onMouseDown={() => handleCLick("web")}
        className="fixed transition-all duration-[400ms] w-[90%] mx-[5%] mt-[64px] top-[0] mob:hidden sm:block overflow-scroll h-[100%]"
      >
        <WebDevGrid contents={[1, 2, 3]} />
      </div> */}
        <div className="flex height-[50%] flex-1 items-center">
          <div className="orient-rl transform rotate-[180deg] text-center text-xl mr-4">
            Illustrator
          </div>
          <IllustrationGrid contents={illoCmsContent} isHorizontal />
        </div>
        <SectionSeparator />
        <div className="flex height-[50%] flex-1 items-center">
          <div className="orient-rl transform rotate-[180deg] text-center text-xl mr-4">
            Developer
          </div>
          <WebDevGrid contents={[1, 2, 3]} isHorizontal />
        </div>

        {/* <div
        onMouseEnter={() => handleHover("web", -20)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("web")}
        className="absolute transition-all translate-x-[-50%] top-[0] mob:hidden sm:block pt-[8px]"
        style={{
          left: hoveredOption === "illo" ? leftValue + 90 + "%" : "25%",
        }}
      >
        <a className="h3">Web Developer</a>
      </div>
      <div className="flex flex-col items-center sm:hidden fixed top-[33%] left-[50%] translate-x-[-50%]">
        <Link href={`/web`} className="mb-[32px]">
          <h3>Web Developer</h3>
        </Link>
        <Link href={`/illustration`}>
          <h3>Illustrator</h3>
        </Link>
      </div> */}
        {/* <div
        onMouseEnter={() => handleHover("illo", -80)}
        onMouseLeave={() => handleHover()}
        onClick={() => handleCLick("illo")}
        className="absolute transition-all translate-x-[50%] top-[0] mob:hidden sm:block pt-[8px]"
        style={{
          right:
            hoveredOption === "web" ? (elementClicked ? "-10%" : "10%") : "25%",
        }}
      >
        <a className="h3">Illustrator</a>
      </div> */}
      </div>
    </>
  );
}
