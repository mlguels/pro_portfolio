import React, { useState, useRef } from "react";
import Image from "next/image";
import LineCircle from "./svgs/LineCircle";

const ScrollBar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const initialPositionX = useRef(0);
  const containerWidth = 800; // Set your desired container width

  const handleMouseDown = (e) => {
    setIsDragging(true);
    initialPositionX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - initialPositionX.current;
      const newPositionX = positionX + deltaX;

      // Define your limits
      const minPositionX = -20;
      const maxPositionX = containerWidth - 390; // Adjust the 100 as needed

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
          <Image src="/Line.svg" width={500} height={100} alt="Line" />
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
