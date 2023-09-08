import Image from "next/image";
import { Poppins } from "next/font/google";

import { Email } from "@/components";

const poppings = Poppins({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-poppins",
  weight: "100",
});

const Hero = () => {
  return (
    <main
      id="/"
      className="
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between 
        gap-8 
        h-[880px]
        mx-8
        pb-[150px]
        "
    >
      <section className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="m-5">
            <h3
              className={`${poppings.variable} text-primary-dark font-pop text-2xl font-bold`}
            >
              HI, I AM MIGUEL
            </h3>
          </li>
          <li>
            <Image
              src="/professionalwebdev.png"
              width={625}
              height={20}
              alt="Pro Web Dev"
            />
          </li>
          <li className="m-4">
            <p className="text-[#6F74A7] font-pop text-xl">
              Transforming the web one line of code at a time: <br />
              Crafting cutting-edge digital experiences with precision, <br />
              passion, and a profound commintment to excellence
            </p>
          </li>
        </ul>
        <ul className="flex items-center gap-20 pt-1 m-5">
          <li>
            <button className="bg-primary-dark text-[#FFFF] rounded-3xl py-5 px-12">
              My Work
            </button>
          </li>
          <li>
            <Email />
          </li>
        </ul>
      </section>
      {/*Right side */}
      <section>
        <Image src="/computer.png" width={825} height={100} alt="Comp Logo" />
      </section>
    </main>
  );
};

export default Hero;
