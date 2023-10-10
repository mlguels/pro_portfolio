import Image from "next/image";

import { Slider } from ".";
import { testimonials } from "@/constants/testimonials";

const About = () => {
  return (
    <main className="h-full bg-main-bg pt-20 pb-12">
      <ul className="flex flex-col items-center">
        <li>
          <Image
            className="w-[575px] h-auto"
            src="/about.svg"
            width={200}
            height={50}
            alt="About"
          />
        </li>
        <li>
          <Slider testimonials={testimonials} />
        </li>
      </ul>
    </main>
  );
};

export default About;
