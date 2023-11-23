"use client";

import Image from "next/image";

import { GetInTouch } from "@/components";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";

const CaseStudies = () => {
  const { theme } = useTheme();
  return (
    <main>
      <section className="bg-main-bg h-[400px] items-center pt-24 p-8 dark:bg-black">
        <ul className="flex flex-col items-center gap-6">
          <li>
            {theme === "light" ? (
              <Image
                src="/casestudies.svg"
                width={600}
                height={50}
                alt="case studies"
              />
            ) : (
              <Image
                src="/casestudiesDark.svg"
                width={600}
                height={50}
                alt="case studies"
              />
            )}
          </li>
          <li>
            <p className="text-white-light text-lg dark:text-main-bg">
              Dive into my recent success stories and discover how I&aposve
              worked{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              with teammates overcome challenges, innovate, and achieve our
              goals
            </p>
          </li>
        </ul>
      </section>

      <section className="p-10 m-10 ">
        <ul className="grid md:grid-cols-2 justify-center gap-4 md:mx-52">
          <li className="flex justify-center hover:opacity-50 cursor-pointer">
            <Link href="/morrent">
              {theme === "light" ? (
                <Image src="/1.svg" width={600} height={250} alt="Morrent" />
              ) : (
                <Image
                  src="/1Dark.svg"
                  width={600}
                  height={250}
                  alt="Morrent"
                />
              )}
            </Link>
          </li>
          <li className="hover:opacity-50 cursor-not-allowed">
            {theme === "light" ? (
              <Image src="/2.svg" width={600} height={250} alt="Jobit" />
            ) : (
              <Image src="/2Dark.svg" width={600} height={250} alt="Jobit" />
            )}
          </li>
          <li className="flex justify-center hover:opacity-50 cursor-not-allowed">
            {theme === "light" ? (
              <Image src="/4.svg" width={600} height={250} alt="HipNode" />
            ) : (
              <Image src="/4Dark.svg" width={600} height={250} alt="HipNode" />
            )}
          </li>
          <li className="flex justify-center hover:opacity-50 cursor-not-allowed">
            {theme === "light" ? (
              <Image
                src="/filmpireCaseStudy.svg"
                width={600}
                height={250}
                alt="HipNode"
              />
            ) : (
              <Image
                src="/filmpireCaseStudy.svg"
                width={600}
                height={250}
                alt="HipNode"
              />
            )}
          </li>
        </ul>
      </section>
      <GetInTouch />
    </main>
  );
};

export default CaseStudies;
