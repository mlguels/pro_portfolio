import Image from "next/image";

const MorrentCaseStudy = () => {
  return (
    <main>
      <section className="bg-main-bg h-auto pt-16 p-10">
        <ul className="flex flex-col items-center gap-20">
          <li>
            <Image
              src="/assets/webdevproject.svg"
              width={230}
              height={100}
              alt="Title"
            />
          </li>
          <li>
            <Image
              src="/assets/carrental.svg"
              width={1000}
              height={100}
              alt="Title"
            />
          </li>
          <li>
            <Image
              src="/assets/m&dview.svg"
              width={900}
              height={100}
              alt="Title"
            />
          </li>
          <li className="flex gap-10 md:gap-44">
            <a
              href="https://cohort3-jupiter-car-rent.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/demosite.svg"
                width={150}
                height={100}
                alt="Title"
              />
            </a>

            <a
              href="https://github.com/JavaScript-Mastery-PRO/Cohort3_Jupiter_CarRent"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/sourcecode.svg"
                width={160}
                height={100}
                alt="Title"
              />
            </a>
          </li>
        </ul>
      </section>

      {/*Role*/}
      <section className="p-14">
        <ul className="flex flex-col md:flex-row justify-center md:gap-36">
          <li className="flex flex-col gap-1">
            <p className="text-[#778295]">My Role</p>
            <h1 className="font-semibold text-xl">Software Engineer</h1>
          </li>
          <li className="flex flex-col gap-1">
            <p className="text-[#778295]">Start date</p>
            <h1 className="font-semibold text-xl">03/01/2023</h1>
          </li>
          <li className="flex flex-col gap-1">
            <p className="text-[#778295]">End Date</p>
            <h1 className="font-semibold text-xl">04/01/2023</h1>
          </li>
        </ul>
      </section>

      {/* Techstack */}
      <section className="flex flex-col items-center gap-4 p-16">
        <ul className="pr-52 md:pr-56">
          <li>
            <p className="text-[#0252CD] text-xs font-semibold">
              Technologies used
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
          </li>
        </ul>
        <ul className="flex justify-center">
          <li>
            <Image src="/react.svg" width={100} height={50} alt="react" />
          </li>
          <li>
            <Image src="/next.svg" width={100} height={50} alt="react" />
          </li>
          <li>
            <Image src="/tailwind.svg" width={100} height={50} alt="react" />
          </li>
          <li>
            <Image src="/ts.svg" width={100} height={50} alt="react" />
          </li>
        </ul>
      </section>

      {/* Morrent Info */}

      <section className="bg-main-bg text-center p-16">
        <ul className="flex flex-col gap-8">
          <li>
            <p className="text-[#6F74A7] text-lg text-left md:mx-40">
              Morent, a cutting-edge car rental application that was developed
              using the Next.js. The app boasts a dynamic homepage that
              showcases featured vehicles, along with convenient pickup &
              drop-off location options & a list of available cars.
            </p>
          </li>
          <li>
            <p className="text-[#6F74A7] text-lg text-left md:mx-40">
              Morent is a modern Car renting application that was developed
              using Next 13, Typescript and styled with Tailwind CSS. The Morent
              application is to have a Homepage: consisting of a banner and
              highlighted cars to rent, an All Cars page: which displays a list
              of vehicles, an Add Car page: Add car details (images, title,
              brand etc.) and a User page: which displays a list of cars rented
              by the user and cars put to rent by the user.
            </p>
          </li>
        </ul>
      </section>

      {/* Problem Statement */}
      <section className="p-16">
        <ul className="flex flex-col item-center md:mx-40 gap-10">
          <li className="flex flex-col gap-1">
            <p className="text-[#0252CD] text-xs font-semibold">Problem</p>
            <h2 className="text-2xl font-semibold">Problem Statement</h2>
          </li>
          <li>
            <p className="text-[#6F74A7] text-lg">
              During the course of the project, I encountered several challenges
              that tested my problem-solving abilities. One of the initial
              hurdles was grappling with the structure of Next.js 13 and the
              organization of the app folder. As the App folder was still in the
              Beta phase, I faced limitations in implementing authentication
              using NextAuth since it was not yet supported with the App folder.
              Overcoming this obstacle required me to explore alternative
              solutions and adapt my approach to ensure the seamless functioning
              of the application despite the limitations posed by the current
              version of Next.js. Despite these setbacks, I remained resilient
              and resourceful, finding workarounds and leveraging available
              resources to deliver a successful outcome.
            </p>
          </li>
          <li className="self-center">
            <Image
              src="/assets/problemstate.svg"
              width={900}
              height={400}
              alt="react"
            />
          </li>
        </ul>
      </section>
      <section>
        <Image
          src="/assets/HF.svg"
          width={100}
          height={100}
          alt="HF"
          className="w-screen"
        />
      </section>
      <section>
        <Image
          src="/assets/img.svg"
          width={100}
          height={100}
          alt="HF"
          className="w-screen"
        />
      </section>
    </main>
  );
};

export default MorrentCaseStudy;
