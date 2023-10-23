import Image from "next/image";

const Learnings = () => {
  return (
    <main className="bg-main-bg rounded-lg p-5 md:mx-72">
      <h1 className="text-[#02BC7D] text-lg font-semibold">Learnings</h1>
      <div className="flex flex-col gap-5 pt-4">
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/tick.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7]">
              Emphasis on Fundamental Understanding: The project focused on
              developing a strong grasp of the fundamental concepts related to
              the technologies involved, prioritizing a deep understanding of
              the core principles underlying each technology.
            </p>
          </span>
        </div>
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/tick.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7]">
              Proficiency in Documentation: A key component of the learning
              process was the mastery of reading and comprehending
              documentation, which played a pivotal role in gaining insight into
              the technologies and resolving challenges effectively.
            </p>
          </span>
        </div>{" "}
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/tick.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7]">
              Effective Problem-Solving: The ability to employ effective
              problem-solving techniques was instrumental in troubleshooting and
              overcoming challenges encountered during the project. This
              proactive approach facilitated the resolution of issues,
              contributing to successful project outcomes.
            </p>
          </span>
        </div>
        <div className="flex gap-4 justify-start items-start">
          <Image src="/assets/tick.svg" width={20} height={5} alt="svg" />{" "}
          <span>
            <p className="text-[#6F74A7]">
              Skill Enhancement and Confidence Building: The project experience
              not only improved technical skills but also boosted confidence in
              addressing future challenges as a developer. It provided valuable
              hands-on experience and a foundation for tackling future endeavors
              with greater assurance and competence.
            </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Learnings;
