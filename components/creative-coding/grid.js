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
      console.log(e)
      return false;
    };

    document
      .querySelector(".creative-coding-wrappers")
      .addEventListener("scroll", scrollHandler);

    return () => {
      document
        .querySelector(".creative-coding-wrappers")
        .removeEventListener("scroll", scrollHandler);
    }
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
    <section className="creative-coding-wrappers relative mt-[25%]">
      <div
        className="arrow right fixed top-[50%] right-[10%] z-10"
        onClick={() => moveTo(true)}
      >
        Next
      </div>
      <div
        className="arrow left fixed top-[50%] left-[10%] z-10"
        onClick={() => moveTo()}
      >
        Prev
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
