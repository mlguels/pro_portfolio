"use client";

import Image from "next/image";

import { Learnings, Challenges } from "@/components";
import { useTheme } from "@/context/theme-context";

const MorrentCaseStudy = () => {
  const { theme } = useTheme();
  return (
    <main>
      <section className="bg-main-bg dark:bg-black h-auto pt-16 p-10">
        <ul className="flex flex-col items-center gap-20">
          <li>
            <Image
              src="/assets/webdevproject.svg"
              width={230}
              height={100}
              alt="Title"
            />
          </li>
          <li>
            {theme === "light" ? (
              <Image
                src="/assets/carrental.svg"
                width={1000}
                height={100}
                alt="Title"
              />
            ) : (
              <Image
                src="/carrentaldark.svg"
                width={1000}
                height={100}
                alt="Title"
              />
            )}
          </li>
          <li>
            <Image
              src="/assets/m&dview.svg"
              width={900}
              height={100}
              alt="Title"
            />
          </li>
          <li className="flex gap-10 md:gap-44">
            <a
              href="https://cohort3-jupiter-car-rent.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/demosite.svg"
                width={150}
                height={100}
                alt="Title"
              />
            </a>

            <a
              href="https://github.com/JavaScript-Mastery-PRO/Cohort3_Jupiter_CarRent"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/sourcecode.svg"
                width={160}
                height={100}
                alt="Title"
              />
            </a>
          </li>
        </ul>
      </section>

      {/*Role*/}
      <section className="p-14">
        <ul className="flex flex-col md:flex-row justify-center md:gap-36">
          <li className="flex flex-col gap-1">
            <p className="text-[#778295] dark:text-[#6F74A7]">My Role</p>
            <h1 className="font-semibold text-xl dark:text-[#FFFF]">
              Software Engineer
            </h1>
          </li>
          <li className="flex flex-col gap-1">
            <p className="text-[#778295] dark:text-[#6F74A7]">Start date</p>
            <h1 className="font-semibold text-x dark:text-[#FFFF]">
              03/01/2023
            </h1>
          </li>
          <li className="flex flex-col gap-1">
            <p className="text-[#778295] dark:text-[#6F74A7]">End Date</p>
            <h1 className="font-semibold text-xl dark:text-[#FFFF]">
              04/01/2023
            </h1>
          </li>
        </ul>
      </section>

      {/* Techstack */}
      <section className="flex flex-col items-center gap-4 p-16">
        <ul className="pr-52 md:pr-56">
          <li>
            <p className="text-[#0252CD] dark:text-primary-light text-xs font-semibold">
              Technologies used
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold dark:text-[#FFFF]">
              Tech Stack
            </h2>
          </li>
        </ul>
        <ul className="flex justify-center">
          {theme === "light" ? (
            <>
              <li>
                <Image src="/react.svg" width={100} height={50} alt="react" />
              </li>
              <li>
                <Image src="/next.svg" width={100} height={50} alt="react" />
              </li>
              <li>
                <Image
                  src="/tailwind.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              </li>
              <li>
                <Image src="/ts.svg" width={100} height={50} alt="react" />
              </li>
            </>
          ) : (
            <>
              <li>
                <Image
                  src="/darkSkills/rDark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              </li>
              <li>
                <Image
                  src="/darkSkills/nDark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              </li>
              <li>
                <Image
                  src="/darkSkills/taDark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              </li>
              <li>
                <Image
                  src="/darkSkills/tDark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              </li>
            </>
          )}
        </ul>
      </section>

      {/* Morrent Info */}

      <section className="bg-main-bg dark:bg-black text-center p-16">
        <ul className="flex flex-col gap-8">
          <li>
            <p className="text-[#6F74A7] text-lg text-left md:mx-40 dark:text-[#F3F8FF]">
              Morent, a cutting-edge car rental application that was developed
              using the Next.js. The app boasts a dynamic homepage that
              showcases featured vehicles, along with convenient pickup &
              drop-off location options & a list of available cars.
            </p>
          </li>
          <li>
            <p className="text-[#6F74A7] text-lg text-left md:mx-40 dark:text-[#F3F8FF]">
              Morent is a modern Car renting application that was developed
              using Next 13, Typescript and styled with Tailwind CSS. The Morent
              application is to have a Homepage: consisting of a banner and
              highlighted cars to rent, an All Cars page: which displays a list
              of vehicles, an Add Car page: Add car details (images, title,
              brand etc.) and a User page: which displays a list of cars rented
              by the user and cars put to rent by the user.
            </p>
          </li>
        </ul>
      </section>

      {/* Problem Statement */}
      <section className="p-16">
        <ul className="flex flex-col item-center md:mx-40 gap-10">
          <li className="flex flex-col gap-1">
            <p className="text-[#0252CD] text-xs font-semibold dark:text-primary-light">
              Problem
            </p>
            <h2 className="text-2xl font-semibold dark:text-[#F3F8FF]">
              Problem Statement
            </h2>
          </li>
          <li>
            <p className="text-[#6F74A7] text-lg dark:text-[#F3F8FF]">
              During the course of the project, I encountered several challenges
              that tested my problem-solving abilities. One of the initial
              hurdles was grappling with the structure of Next.js 13 and the
              organization of the app folder. As the App folder was still in the
              Beta phase, I faced limitations in implementing authentication
              using NextAuth since it was not yet supported with the App folder.
              Overcoming this obstacle required me to explore alternative
              solutions and adapt my approach to ensure the seamless functioning
              of the application despite the limitations posed by the current
              version of Next.js. Despite these setbacks, I remained resilient
              and resourceful, finding workarounds and leveraging available
              resources to deliver a successful outcome.
            </p>
          </li>
          <li className="self-center">
            <Image
              src="/assets/problemstate.svg"
              width={900}
              height={400}
              alt="react"
            />
          </li>
        </ul>
      </section>
      <section>
        {theme === "light" ? (
          <Image
            src="/assets/HF.svg"
            width={100}
            height={100}
            alt="HF"
            className="w-screen"
          />
        ) : (
          <Image
            src="/assets/HFDark.svg"
            width={100}
            height={100}
            alt="HF"
            className="w-screen"
          />
        )}
      </section>
      <section>
        <Image
          src="/assets/img.svg"
          width={100}
          height={100}
          alt="HF"
          className="w-screen"
        />
      </section>

      {/* Way of work */}
      <section className="flex flex-col items-center gap-4 p-16">
        <ul className="pr-56 md:pr-[52%]">
          <li>
            <p className="text-[#0252CD] dark:text-primary-light text-xs font-semibold">
              Way of work
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold dark:text-[#FFFF] flex gap-1">
              My <span>Process</span>
            </h2>
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row gap-12">
          <li className="flex gap-10">
            <div className="flex flex-col">
              {theme === "light" ? (
                <Image
                  src="/assets/tech1.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              ) : (
                <Image
                  src="/assets/tech1Dark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              )}
              <p className="text-xl font-semibold dark:text-[#FFFF]">
                Definition
              </p>
            </div>
            <div className="flex flex-col items-center">
              {theme === "light" ? (
                <Image
                  src="/assets/tech2.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              ) : (
                <Image
                  src="/assets/tech2Dark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              )}
              <p className="text-xl font-semibold dark:text-[#FFFF]">Design</p>
            </div>
            <div className="flex flex-col items-center">
              {theme === "light" ? (
                <Image
                  src="/assets/tech3.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              ) : (
                <Image
                  src="/assets/tech3Dark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              )}
              <p className="text-xl font-semibold dark:text-[#FFFF]">
                Planning
              </p>
            </div>
          </li>
          <ul className="flex gap-10">
            <li className="flex flex-col items-center">
              {theme === "light" ? (
                <Image
                  src="/assets/tech4.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              ) : (
                <Image
                  src="/assets/tech4Dark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              )}
              <p className="text-xl font-semibold dark:text-[#FFFF]">
                Development
              </p>
            </li>
            <li className="flex flex-col items-center">
              {theme === "light" ? (
                <Image
                  src="/assets/tech5.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              ) : (
                <Image
                  src="/assets/tech5Dark.svg"
                  width={100}
                  height={50}
                  alt="react"
                />
              )}
              <p className="text-xl font-semibold dark:text-[#FFFF]">
                Deployment
              </p>
            </li>
          </ul>
        </ul>
      </section>

      {/* Challenges and Learnings */}
      <section className="p-10 flex flex-col gap-5">
        <div className="md:mx-72">
          <p className="text-[#0252CD] text-xs font-semibold dark:text-primary-light">
            Problem
          </p>
          <h2 className="text-2xl font-semibold dark:text-[#FFFF]">
            Challenges & Learnings
          </h2>
        </div>
        <Challenges />
        <Learnings />
      </section>
    </main>
  );
};

export default MorrentCaseStudy;
