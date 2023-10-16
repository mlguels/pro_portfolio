"use client";

import Image from "next/image";

import { Slider } from ".";
import { testimonials } from "@/constants/testimonials";
import { useTheme } from "@/context/theme-context";

const About = () => {
  const { theme } = useTheme();
  return (
    <main className="h-full bg-main-bg pt-20 pb-12 dark:bg-black">
      <ul className="flex flex-col items-center">
        <li>
          {theme === "light" ? (
            <Image
              className="w-[575px] h-auto"
              src="/about.svg"
              width={200}
              height={50}
              alt="About"
            />
          ) : (
            <Image
              className="w-[575px] h-auto"
              src="/aboutDark.svg"
              width={200}
              height={50}
              alt="About"
            />
          )}
        </li>
        <li>
          <Slider testimonials={testimonials} />
        </li>
      </ul>
    </main>
  );
};

export default About;
