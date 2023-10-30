import React, { useState, useRef } from "react";
import Image from "next/image";
import LineCircle from "./svgs/LineCircle";
import { useTheme } from "@/context/theme-context";

const ScrollBar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const initialPositionX = useRef(0);
  const { theme } = useTheme();
  const containerWidth = 800;

  const handleMouseDown = (e: { clientX: number }) => {
    setIsDragging(true);
    initialPositionX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: { clientX: number }) => {
    if (isDragging) {
      const deltaX = e.clientX - initialPositionX.current;
      const newPositionX = positionX + deltaX;

      const minPositionX = -20;
      const maxPositionX = containerWidth - 390;

      const constrainedPositionX = Math.max(
        minPositionX,
        Math.min(maxPositionX, newPositionX)
      );

      setPositionX(constrainedPositionX);
      initialPositionX.current = e.clientX;
    }
  };

  return (
    <section
      className="flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ul className="flex flex-col pb-32 pr-14">
        <li className="translate-y-12">
          {theme === "light" ? (
            <Image src="/Line.svg" width={500} height={100} alt="Line" />
          ) : (
            <Image src="/LineDark.svg" width={500} height={100} alt="Line" />
          )}
        </li>
        <li
          className="cursor-pointer"
          onMouseDown={handleMouseDown}
          style={{ transform: `translateX(${positionX}px)` }}
        >
          <LineCircle />
        </li>
      </ul>
    </section>
  );
};

export default ScrollBar;
