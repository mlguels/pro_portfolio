"use client";

import { useState } from "react";
import Image from "next/image";

import { WorkExpCard } from ".";

const WorkExp = () => {
  const [slide, setSlide] = useState([0]);
  return (
    <main className="bg-[#FFFF] pt-12 pb-12">
      <section className="flex flex-col md:flex-row items-center justify-center gap-14">
        <div className="bg-main-bg dark:bg-main-black w-auto h-auto md:w-[700px] md:h-[610px] p-10 flex flex-col items-center rounded-xl justify-center gap-10">
          <div className="text-6xl font-bold tracking-wide pr-4">
            Work Experience
          </div>
          <h2 className="text-[#6F74A7] mx-14 text-lg">
            Take a trip through my career, where I&aposve not only paved the way
            but also reached important goals, taken on different roles, worked
            on impressive projects, and accomplished notable things.
          </h2>
          <p className="text-[#6F74A7] mx-14 text-lg">
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with growth and
            innovation.
          </p>
          <div className="flex flex-col">
            <Image
              className="mr-28"
              src="/slide.svg"
              width={400}
              height={100}
              alt="Slide"
            />
            <div className="pt-10">
              <div>
                <Image src="/Line.svg" width={500} height={100} alt="Line" />
                <Image
                  className="-translate-y-6"
                  src="/lineCircle.svg"
                  width={50}
                  height={50}
                  alt="Line"
                />
              </div>
            </div>
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
