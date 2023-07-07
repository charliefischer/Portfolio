import { useEffect } from "react";

export default function CustomCursor({ colour="black" }){
  const cursorClassNames = 'custom-cursor fixed w-6 h-6 rounded-full pointer-events-none z-50 opacity-90 ' + `bg-orange-main`
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector('.custom-cursor');
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className={cursorClassNames} />
  )
}