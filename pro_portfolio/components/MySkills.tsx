"use client";

import Image from "next/image";

import { skillsData } from "@/constants/skillsData";
import { useTheme } from "@/context/theme-context";

const MySkills = () => {
  const { theme } = useTheme();
  return (
    <main className="bg-[#FFFF] pb-10 dark:bg-main-black">
      <div className="flex flex-col items-center gap-5 pt-10">
        <div>
          {theme === "light" ? (
            <Image src="/TITLE.svg" width={225} height={200} alt="My Skill" />
          ) : (
            <Image src="/TITLE.png" width={225} height={200} alt="My Skill" />
          )}
        </div>
        <ul className="grid grid-cols-4 md:grid-cols-8 gap-10">
          {skillsData.map((skill, index) => (
            <li
              className="transition-transform transform hover:scale-110 shadow-sm"
              key={index}
            >
              <Image
                src={theme === "dark" ? skill.darkIconPath : skill.iconPath}
                width={125}
                height={125}
                alt="Skill Icon"
                className="grayscale-img"
              />
            </li>
          ))}
        </ul>
        <style jsx global>
          {`
            .grayscale-img {
              filter: grayscale(100%);
              transition: filter 0.3s ease-in-out;
            }

            .grayscale-img:hover {
              filter: grayscale(0%);
            }
          `}
        </style>
      </div>
    </main>
  );
};

export default MySkills;
