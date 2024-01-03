/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Challenges = () => {
  return (
    <main className="bg-main-bg rounded-lg p-5 md:mx-72 dark:bg-black">
      <h1 className="text-[#E15A46] text-lg font-semibold">Challenges</h1>
      <div className="flex flex-col gap-5 pt-4">
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/Challegne.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7] dark:text-[#F3F8FF]">
              Adapted to Next.js 13's evolving structure and app folder
              organization, addressing initial hurdles in project development.
            </p>
          </span>
        </div>
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/Challegne.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7] dark:text-[#F3F8FF]">
              Demonstrated problem-solving skills by navigating authentication
              limitations with NextAuth, creatively seeking alternative
              solutions for a smooth application experience.
            </p>
          </span>
        </div>{" "}
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/Challegne.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7] dark:text-[#F3F8FF]">
              Maintained resilience and resourcefulness in overcoming setbacks,
              effectively leveraging available resources to achieve project
              success despite challenges posed by the current version of
              Next.js.
            </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Challenges;
