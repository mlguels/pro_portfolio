import Image from "next/image";
import { Testimonial } from ".";

const About = () => {
  return (
    <main className="h-screen bg-main-bg pt-20">
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
          <Testimonial
            image={{
              url: "/Adrian.svg",
              width: 200,
              height: 200,
              alt: "Adrian",
            }}
            testimony="I have had the pleasure of working with Adrian as a Software Developer 
            and can confidently say that he is a valuable asset to any team. He is highly skilled in 
            ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently 
            delivers high-quality code. "
            name="Adrian Hajdin"
            info="Founder & CEO at JS Mastery"
          />
        </li>
      </ul>
    </main>
  );
};

export default About;
