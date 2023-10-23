import Image from "next/image";

import { WorkExpCard } from ".";

const WorkExp = () => {
  return (
    <main className="bg-[#FFFF] pt-12 pb-12">
      <section className="flex flex-col md:flex-row items-center justify-center gap-28">
        <div className="bg-main-black w-auto h-auto md:w-[700px] md:h-[610px] p-10 flex flex-col items-center rounded-xl justify-center gap-10">
          <Image
            src="/DESCRIPTION.svg"
            width={400}
            height={100}
            alt="Work Exp"
          />
          <div className="pt-5">
            {" "}
            <input type="range" />
          </div>
        </div>
        <ul className="flex flex-col gap-8">
          <li>
            <WorkExpCard
              imageLogo={{
                url: "/jsmlogl.webp",
                width: 50,
                height: 50,
                alt: "Work Logo",
              }}
              title="JSM Pro Master Class"
              desc="Full-Stack Developer - 6 months +"
            />
          </li>
          <li className="opacity-60">
            <WorkExpCard
              imageLogo={{
                url: "/slack.svg",
                width: 50,
                height: 50,
                alt: "Work Logo",
              }}
              title="..."
              desc="..."
            />
          </li>
          <li className="opacity-60">
            <WorkExpCard
              imageLogo={{
                url: "/slack.svg",
                width: 50,
                height: 50,
                alt: "Work Logo",
              }}
              title="..."
              desc="..."
            />
          </li>
          <li className="opacity-60">
            <WorkExpCard
              imageLogo={{
                url: "/slack.svg",
                width: 50,
                height: 50,
                alt: "Work Logo",
              }}
              title="..."
              desc="..."
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default WorkExp;
