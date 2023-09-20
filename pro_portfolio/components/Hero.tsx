import Image from "next/image";
import { Poppins } from "next/font/google";

import { Email, Container, MyWorkButton } from "@/components";

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
        md:h-screen
        bg-main-bg
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
                className={`${poppings.variable} text-primary-dark font-pop text-2xl font-semibold tracking-widest`}
              >
                HI, I AM MIGUEL
              </h3>
            </li>
            <li>
              <Image
                src="/pwd2.png"
                width={625}
                height={20}
                alt="Pro Web Dev"
                priority
              />
            </li>
            <li className="m-4 pl-2">
              <p className="text-[#6F74A7] font-pop text-lg md:text-2xl max-w-fit whitespace-nowrap">
                Transforming the web one line of code at a time: <br />
                Crafting cutting-edge digital experiences with precision, <br />
                passion, and a profound commintment to excellence
              </p>
            </li>
          </ul>
          <ul className="flex flex-col justify-between md:flex-row md:gap-[40px] pt-1 m-5">
            <li>
              <MyWorkButton />
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
      </div>
    </main>
  );
};

export default Hero;
