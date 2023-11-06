"use client";

import { WorkExpCard } from ".";
import WorkExpLeft from "./WorkExpLeft";

const WorkExp = () => {
  return (
    <main className="bg-[#FFFF] dark:bg-main-black pt-12 pb-12 p-5">
      <section className="flex flex-col md:flex-row items-center justify-center gap-14">
        <WorkExpLeft />
        <ul className="flex flex-col gap-8">
          <WorkExpCard />
        </ul>
      </section>
    </main>
  );
};

export default WorkExp;
