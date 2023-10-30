"use client";

import Image from "next/image";

import { WorkExpCard } from ".";
import ScrollBar from "./ScrollBar";
import { useTheme } from "@/context/theme-context";

const WorkExp = () => {
  const { theme } = useTheme();
  return (
    <main className="bg-[#FFFF] dark:bg-main-black pt-12 pb-12 p-5">
      <section className="flex flex-col md:flex-row items-center justify-center gap-14">
        <div className="bg-main-bg dark:bg-black md:w-[700px] h-[600px] md:h-[650px] flex flex-col items-center rounded-xl justify-center gap-14">
          <div className="text-5xl md:text-6xl font-bold tracking-wider pr-8 pt-40 dark:text-[#FFFFFF]">
            Work Experience
          </div>
          <h2 className="text-[#6F74A7] mx-8 md:mx-20 md:text-xl dark:text-[#F3F8FF]">
            Take a trip through my career, where I've not only paved the way but
            also reached important goals, taken on different{" "}
            <span className="text-primary-dark">roles</span>, worked on
            impressive <span className="text-primary-dark">projects</span>, and
            accomplished notable things.
          </h2>
          <p className="text-[#6F74A7] mx-8 md:mx-20 md:text-xl dark:text-[#F3F8FF]">
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with{" "}
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
        <ul className="flex flex-col gap-8">
          <WorkExpCard />
        </ul>
      </section>
    </main>
  );
};

export default WorkExp;
