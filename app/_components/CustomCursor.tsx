"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      setIsHovering((e.target as HTMLElement).closest(".cursor-pointer") !== null);
    };

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
    };
  }, []);

  return (
    <div
      className={`fixed w-12 h-12 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10 transition-transform duration-200 mix-blend-difference ${
        isHovering ? "bg-teal-900 scale-150" : "bg-stone-400"
      }`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
}
