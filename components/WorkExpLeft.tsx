import React, { useState } from "react";

import ScrollBar from "./ScrollBar";
import { workExperienceContent } from "@/constants/work";

const WorkExpLeft = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const content = workExperienceContent[contentIndex];

  const scrollToNextContent = () => {
    // Function to scroll to the next content index
    const nextIndex = (contentIndex + 1) % workExperienceContent.length;
    setContentIndex(nextIndex);
  };

  return (
    <div className="bg-main-bg dark:bg-black md:w-[700px] h-[600px] md:h-[650px] flex flex-col items-center rounded-xl justify-center gap-14">
      <div className="text-4xl md:text-6xl font-bold pr-8 pt-40 dark:text-[#FFFFFF]">
        {content.title}
      </div>
      <h2 className="text-[#6F74A7] mx-8 md:mx-20 md:text-xl dark:text-[#F3F8FF]">
        {content.description1}
      </h2>
      <p className="text-[#6F74A7] mx-8 md:mx-20 md:text-xl dark:text-[#F3F8FF]">
        {content.description2}
      </p>
      <div className="p-10">
        <ScrollBar
          contentIndex={contentIndex}
          scrollToNextContent={scrollToNextContent}
        />
      </div>
    </div>
  );
};

export default WorkExpLeft;

/* 
import React from "react";
import Image from "next/image";
import ScrollBar from "./ScrollBar";
import { useTheme } from "@/context/theme-context";

interface Props {
  contentIndex: number;
}

const workExperienceContent = [
  {
    title: "Work Experience 1",
    description1: "Description 1 for Work Experience 1",
    description2: "Description 2 for Work Experience 1",
    imageLight: "/slide.svg",
    imageDark: "/slideDar.svg",
  },
  {
    title: "Work Experience 2",
    description1: "Description 1 for Work Experience 2",
    description2: "Description 2 for Work Experience 2",
    imageLight: "/slide2.svg",
    imageDark: "/slideDar2.svg",
  },
];

const WorkExpLeft = ({ contentIndex }: Props) => {
  const { theme } = useTheme();
  const content = workExperienceContent[contentIndex];

  return (
    <div className="bg-main-bg dark:bg-black md:w-[700px] h-[600px] md:h-[650px] flex flex-col items-center rounded-xl justify-center gap-14">
      <div className="text-5xl md:text-6xl font-bold tracking-wider pr-8 pt-40 dark:text-[#FFFFFF]">
        Work Experience
      </div>
      <h2 className="text-[#6F74A7] mx-8 md:mx-20 md:text-xl dark:text-[#F3F8FF]">
        Take a trip through my career, where I&posve not only paved the way but
        also reached important goals, taken on different{" "}
        <span className="text-primary-dark">roles</span>, worked on impressive{" "}
        <span className="text-primary-dark">projects</span>, and accomplished
        notable things.
      </h2>
      <p className="text-[#6F74A7] mx-8 md:mx-20 md:text-xl dark:text-[#F3F8FF]">
        From coding in the late hours to collaborating with talented teams, my
        career has been a dynamic adventure filled with{" "}
        <span className="text-primary-dark">growth</span> and{" "}
        <span className="text-primary-dark">innovation</span>.
      </p>
      <div className="p-10">
        {theme === "light" ? (
          <Image src="/slide.svg" width={425} height={100} alt="Slide" />
        ) : (
          <Image src="/slideDar.svg" width={425} height={100} alt="Slide" />
        )}

        <ScrollBar />
      </div>
    </div>
  );
};

export default WorkExpLeft;


*/
