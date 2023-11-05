import { useTheme } from "@/context/theme-context";
import { useState, useRef } from "react";
import LineCircle from "./svgs/LineCircle";
import Image from "next/image";
import { workExperienceContent } from "@/constants/work";

interface Props {
  contentIndex: number;
  scrollToNextContent: () => void;
}

const ScrollBar = ({ contentIndex, scrollToNextContent }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const initialPositionX = useRef(0);
  const { theme } = useTheme();
  const containerWidth = 800;
  const content = workExperienceContent[contentIndex];

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

  const handleMouseWheel = (e: { deltaY: number }) => {
    if (e.deltaY > 0) {
      scrollToNextContent();
    }
  };

  return (
    <section
      className="flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleMouseWheel}
    >
      <ul className="flex flex-col pb-32 pr-14">
        <li className="translate-y-12">
          {theme === "light" ? (
            <Image
              src={content.imageLight}
              width={500}
              height={100}
              alt="Line"
            />
          ) : (
            <Image
              src={content.imageDark}
              width={500}
              height={100}
              alt="Line"
            />
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
