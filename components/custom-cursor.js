import { useEffect } from "react";

export default function CustomCursor({ colour = "black" }) {
  const cursorClassNames =
    "custom-cursor fixed w-6 h-6 rounded-full pointer-events-none z-50 opacity-90 mix-blend-difference hidden sm:block " +
    `bg-orange-main`;
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      if (
        (event.target.tagName === "A" && !cursor.classList.contains("grow")) ||
        (event.target.className.baseVal === "button" &&
          !cursor.classList.contains("grow"))
      ) {
        cursor.classList.add("grow");
      }
      if (event.target.tagName !== "A" && !event.target.classList.contains("button")) {
        cursor.classList.remove("grow");
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div className={cursorClassNames} />;
}
