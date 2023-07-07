import Crazy from "./crazy";
import Zipper from "./zipper";
import Whirl from "./whirl";
import Delay from "./delay";
import Sticks from "./sticks";
import { useEffect } from "react";

export default function Grid() {
  let slideableArea;
  useEffect(() => {
    slideableArea = document.querySelector(".coding-container");
    const scrollHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(e);
      return false;
    };

    document
      .querySelector(".creative-coding-wrappers")
      .addEventListener("scroll", scrollHandler);

    return () => {
      document
        .querySelector(".creative-coding-wrappers")
        ?.removeEventListener("scroll", scrollHandler);
    };
  });
  let activeIndex = 0;
  const moveTo = (direction = false) => {
    activeIndex = direction ? activeIndex + 1 : activeIndex - 1;
    activeIndex = activeIndex < 0 ? 0 : activeIndex;
    activeIndex = activeIndex > 4 ? 4 : activeIndex;
    console.log(activeIndex);
    slideableArea.style.transform = `translate(-${activeIndex * 100}vw)`;
  };
  const components = [<Crazy />, <Zipper />, <Whirl />, <Sticks />, <Delay />];
  return (
    <section className="creative-coding-wrappers relative my-[120px]">
      <div
        className="arrow right absolute top-[50%] right-[10%] z-10 cursor-pointer"
        onClick={() => moveTo(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 28 28"
          width="32px"
          className=""
        >
          <path
            fill="#000"
            d="M14 0A14 14 0 0 0 0 14a14 14 0 0 0 14 14 14 14 0 0 0 14-14A14 14 0 0 0 14 0Zm0 26A12 12 0 0 1 2 14 12 12 0 0 1 14 2a12 12 0 0 1 12 12 12 12 0 0 1-12 12Z"
          />
          <path
            fill="#000"
            d="m20.9 13.6-.2-.3-4-4a1 1 0 0 0-1.4 0 1 1 0 0 0 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h10.6l-2.3 2.3a1 1 0 0 0 0 1.4c.2.2.5.3.7.3.2 0 .5-.1.7-.3l4-4 .2-.3c.1-.3.1-.5 0-.8Z"
          />
        </svg>
      </div>
      <div
        className="arrow left absolute top-[50%] left-[10%] z-10 rotate-180 cursor-pointer"
        onClick={() => moveTo()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 28 28"
          width="32px"
        >
          <path
            fill="#000"
            d="M14 0A14 14 0 0 0 0 14a14 14 0 0 0 14 14 14 14 0 0 0 14-14A14 14 0 0 0 14 0Zm0 26A12 12 0 0 1 2 14 12 12 0 0 1 14 2a12 12 0 0 1 12 12 12 12 0 0 1-12 12Z"
          />
          <path
            fill="#000"
            d="m20.9 13.6-.2-.3-4-4a1 1 0 0 0-1.4 0 1 1 0 0 0 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h10.6l-2.3 2.3a1 1 0 0 0 0 1.4c.2.2.5.3.7.3.2 0 .5-.1.7-.3l4-4 .2-.3c.1-.3.1-.5 0-.8Z"
          />
        </svg>
      </div>
      <div className="coding-container flex flex-nowrap snap-x relative left-[0px] transition-transform duration-[800ms] transform overflow-hiddenn">
        {components.map((comp, i) => {
          return (
            <div className="mx-auto min-w-[100vw] flex justify-center" key={i}>
              {comp}
            </div>
          );
        })}
      </div>
    </section>
  );
}
