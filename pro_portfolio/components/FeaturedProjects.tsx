import Image from "next/image";

import { FeaturedProjectv1, Technologies, DetailProjectButton } from ".";

const FeaturedProjects = () => {
  return (
    <main className="h-auto flex justify-center pt-20 pb-5">
      <ul className="flex flex-col gap-10 items-center">
        <li>
          <Image
            className="w-[430px] h-auto"
            src="featuredprojects.svg"
            width={200}
            height={100}
            alt="Featured Projects"
          />
        </li>
        <li>
          <FeaturedProjectv1
            background="bg-morent"
            projectTitle={
              <span>
                Morrent - A Car <br />
                <span style={{ whiteSpace: "nowrap" }}>Rental Application</span>
              </span>
            }
            technologies={[
              <Technologies tech1="ReactJS" tech2="Next.js" />,
              <Technologies tech1="Node.js" tech2="MongoDB" />,
            ]}
            desktopView={{
              url: "/morentLaptop.svg",
              width: 100,
              height: 50,
              alt: "Morent Logo",
            }}
            mobileView={{
              url: "/morentMobile.svg",
              width: 100,
              height: 50,
              alt: "Morent Logo",
            }}
            seeDetailButton={<DetailProjectButton />}
          />
        </li>
        <li>
          <FeaturedProjectv1
            background="bg-hipnode"
            projectTitle={
              <span className="whitespace-nowrap">
                Hipnode - A Social <br />
                <span className="whitespace-nowrap">Media Application</span>
              </span>
            }
            technologies={[
              <Technologies tech1="ReactJS" tech2="Vite" />,
              <Technologies tech1="Express.js" tech2="MySQL" />,
            ]}
            desktopView={{
              url: "/hipnodeLaptop.svg",
              width: 100,
              height: 50,
              alt: "Hipnode Logo",
            }}
            mobileView={{
              url: "/hipnodeMobile.svg",
              width: 100,
              height: 50,
              alt: "Hipnode Logo",
            }}
            seeDetailButton={<DetailProjectButton />}
          />
        </li>
        <li>
          <button className="bg-primary-dark text-[#FFFF] flex items-center gap-3 py-4 px-6 rounded-3xl">
            See more case studies
            <span className="pt-1">
              <Image src="/arrow.svg" width={13} height={10} alt="Arrow" />
            </span>
          </button>
        </li>
      </ul>
    </main>
  );
};

export default FeaturedProjects;
