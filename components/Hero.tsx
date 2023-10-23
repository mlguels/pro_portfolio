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
        "
    >
      <div
        className="
        flex
        flex-col 
        md:flex-row 
        items-center 
        justify-around
        pt-10
        pl-10
        pr-10 
        w-auto
        "
      >
        <section>
          <ul className="flex flex-col gap-2">
            <li className="m-5 pl-4">
              <h3
                className={`${poppings.variable} text-primary-dark font-pop text-2xl font-semibold tracking-widest dark:text-primary-light`}
              >
                HI, I AM MIGUEL
              </h3>
            </li>
            <li className={`${theme === "dark" && "pl-5"} w-auto`}>
              {theme === "light" ? (
                <Image
                  src="/pwd2.png"
                  width={615}
                  height={20}
                  alt="Pro Web Dev"
                  priority
                />
              ) : (
                <Image
                  src="/pwdDark.svg"
                  width={615}
                  height={20}
                  alt="Pro Web Dev"
                  priority
                />
              )}
            </li>
            <li className="m-4 pl-2">
              <p className="text-[#6F74A7] font-pop text-lg md:text-2xl max-w-fit whitespace-nowrap dark:text-main-bg">
                Transforming the web one line of code at a time: <br />
                Crafting cutting-edge digital experiences with precision, <br />
                passion, and a profound commintment to excellence
              </p>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row gap-5 pt-1 m-5">
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