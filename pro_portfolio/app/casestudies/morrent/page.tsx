import Image from "next/image";

const MorrentCaseStudy = () => {
  return (
    <main>
      <section className="bg-main-bg h-screen pt-16 p-10">
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
            <Image
              src="/assets/demosite.svg"
              width={150}
              height={100}
              alt="Title"
            />

            <Image
              src="/assets/sourcecode.svg"
              width={160}
              height={100}
              alt="Title"
            />
          </li>
        </ul>
      </section>

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
    </main>
  );
};

export default MorrentCaseStudy;
