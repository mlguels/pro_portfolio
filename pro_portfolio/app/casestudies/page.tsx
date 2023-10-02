import Image from "next/image";

import { GetInTouch } from "@/components";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <main>
      <section className="bg-main-bg h-[400px] items-center pt-24 p-8">
        <ul className="flex flex-col items-center gap-6">
          <li>
            <Image
              src="/casestudies.svg"
              width={600}
              height={50}
              alt="case studes"
            />
          </li>
          <li>
            <p className="text-white-light text-lg">
              Dive into my recent success stories and discover how I've worked{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              with teammates overcome challenges, innovate, and achieve our
              goals
            </p>
          </li>
        </ul>
      </section>

      <section className="p-10 m-10">
        <ul className="grid md:grid-cols-2 justify-center gap-4 md:mx-52">
          <li className="flex justify-center">
            <Link href="/casestudies/morrent">
              <Image src="/1.svg" width={600} height={250} alt="Morrent" />
            </Link>
          </li>
          <li>
            <Image src="/2.svg" width={600} height={250} alt="Jobit" />
          </li>
          <li className="flex justify-center">
            <Image src="/4.svg" width={600} height={250} alt="HipNode" />
          </li>
        </ul>
      </section>
      <GetInTouch />
    </main>
  );
};

export default CaseStudies;
