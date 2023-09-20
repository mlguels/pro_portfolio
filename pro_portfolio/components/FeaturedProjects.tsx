import Image from "next/image";

import { FeaturedProjectv1, Technologies, DetailProjectButton } from ".";

const FeaturedProjects = () => {
  return (
    <main className="h-screen flex justify-center pt-20">
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
      </ul>
    </main>
  );
};

export default FeaturedProjects;
