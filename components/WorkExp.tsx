"use client";

import { useState } from "react";
import Image from "next/image";

import { WorkExpCard } from ".";

const WorkExp = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const content = [
    {
      info: "Take a trip through my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      info2:
        "Take a trip through my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      title: "JSM Pro Master Class",
      desc: "Full-Stack Developer - 6 months +",
      url: "/jsmlogl.webp",
    },
    {
      info: "Take a trip through my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      info2:
        "Take a trip  my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      title: "Another Job Title",
      desc: "Another job description.",
      url: "/jsmlogl.webp",
    },
    {
      info: "Take a trip through my career,  I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      info2:
        "Take a trip through my career, where I've not  paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      title: "Yet Another Job",
      desc: "This is the description for another job.",
      url: "/jsmlogl.webp",
    },
    {
      info: "Take a trip through my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      info2:
        "Take a trip through my , where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
      title: "One More Job",
      desc: "This is the description for one more job.",
      url: "/jsmlogl.webp",
    },
  ];

  return (
    <main className="bg-[#FFFF] pt-12 pb-12">
      <section className="flex flex-col md:flex-row items-center justify-center gap-28">
        <div className="bg-main-bg dark:bg-main-black w-auto h-auto md:w-[700px] md:h-[610px] p-10 flex flex-col items-center rounded-xl justify-center gap-20">
          <Image src="/wexp.svg" width={500} height={50} alt="Title" />
          <h2 className="text-[#6F74A7] mx-14">{content[sliderValue].info}</h2>
          <p className="text-[#6F74A7] mx-14">{content[sliderValue].info2}</p>
          <div className="pt-5">
            <input
              type="range"
              min={0}
              max={content.length - 1}
              value={sliderValue.toString()}
              onChange={handleSliderChange}
            />
          </div>
        </div>
        <ul className="flex flex-col gap-8">
          {content.map((item, index) => (
            <li key={index} className={`${sliderValue === index}`}>
              <WorkExpCard
                imageLogo={{
                  url: item.url,
                  width: 50,
                  height: 50,
                  alt: "Work Logo",
                }}
                title={item.title}
                desc={item.desc}
                show={sliderValue === index}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default WorkExp;
