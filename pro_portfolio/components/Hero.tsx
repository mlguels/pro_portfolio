import Image from "next/image";
import { Poppins } from "next/font/google";

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
      <section className="p-8">
        <ul className="flex flex-col gap-8">
          <li>
            <h3
              className={`${poppings.variable} text-primary-dark font-pop text-2xl`}
            >
              HI, I AM MIGUEL
            </h3>
          </li>
          <li>
            <Image
              src="/professionalwebdev.png"
              width={650}
              height={20}
              alt="Pro Web Dev"
            />
          </li>
          <li>
            <p className="text-[#6F74A7] font-pop text-xl">
              Transforming the web one line of code at a time: <br />
              Crafting cutting-edge digital experiences with precision, <br />
              passion, and a profound commintment to excellence
            </p>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <button className="bg-primary-dark text-[#FFFF] rounded-2xl py-4 px-6">
            My Work
          </button>
          <p>mrodandres@icloud.com</p>
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
