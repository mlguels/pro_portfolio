"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

import { Email, MyWorkButton, Scroll } from "@/components";
import { useTheme } from "@/context/theme-context";

const poppings = Poppins({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-poppins",
  weight: "100",
});

const Hero = () => {
  const { theme } = useTheme();
  return (
    <main
      id="/"
      className="
        md:h-screen
        bg-main-bg
        dark:bg-black
        p-8
        "
    >
      <div
        className="
        flex
        flex-col 
        md:flex-row 
        items-center 
        "
      >
        <section className="flex flex-col justify-start items-start gap-4 p-4">
          <ul className="flex flex-col gap-2 items-start">
            <li>
              <h3
                className={`${poppings.variable} text-primary-dark font-pop text-2xl pl-1 font-semibold tracking-widest dark:text-primary-light`}
              >
                HI, I AM MIGUEL
              </h3>
            </li>
            <li className={`${theme === "dark" && ""} w-auto`}>
              {theme === "light" ? (
                <Image
                  src="/newPWD.svg"
                  width={615}
                  height={20}
                  alt="Pro Web Dev"
                />
              ) : (
                <Image
                  src="/pwdDark.svg"
                  width={615}
                  height={20}
                  alt="Pro Web Dev"
                />
              )}
            </li>
            <li>
              <p className="text-[#6F74A7] font-pop md:text-xl whitespace-nowrap dark:text-main-bg">
                Transforming the web one line of code at a time: <br />
                Crafting cutting-edge digital experiences with precision, <br />
                passion, and a profound commintment to excellence
              </p>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row gap-5 mx-auto w-full">
            <li>
              <Scroll href="#featured_projects">
                <MyWorkButton />
              </Scroll>
            </li>
            <li>
              <Email />
            </li>
          </ul>
        </section>
        {/*Right side */}
        <section>
          <Image src="/computer.png" width={850} height={400} alt="Comp Logo" />
        </section>
      </div>
    </main>
  );
};

export default Hero;
