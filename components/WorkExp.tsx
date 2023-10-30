"use client";

import { useState } from "react";
import Image from "next/image";

import { WorkExpCard } from ".";
import ScrollBar from "./ScrollBar";

const WorkExp = () => {
  const [slide, setSlide] = useState([0]);
  return (
    <main className="bg-[#FFFF] pt-12 pb-12">
      <section className="flex flex-col md:flex-row items-center justify-center gap-14">
        <div className="bg-main-bg dark:bg-main-black md:w-[700px] md:h-[600px] flex flex-col items-center rounded-xl justify-center gap-14">
          <div className="text-6xl font-bold tracking-wider pr-4 pt-36">
            Work Experience
          </div>
          <h2 className="text-[#6F74A7] mx-20 text-xl">
            Take a trip through my career, where I&aposve not only paved the way
            but also reached important goals, taken on different roles, worked
            on impressive projects, and accomplished notable things.
          </h2>
          <p className="text-[#6F74A7] mx-20 text-xl">
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with growth and
            innovation.
          </p>
          <div className="flex flex-col gap-2">
            <Image src="/slide.svg" width={350} height={100} alt="Slide" />
            <ScrollBar />
          </div>
        </div>
        <ul className="flex flex-col gap-8">
          <WorkExpCard />
        </ul>
      </section>
    </main>
  );
};

export default WorkExp;
