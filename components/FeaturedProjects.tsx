"use client";

/* eslint-disable react/jsx-key */
import Image from "next/image";

import {
  FeaturedProjectv1,
  Technologies,
  DetailProjectButton,
  ButtonLink,
} from ".";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";

const FeaturedProjects = () => {
  const { theme } = useTheme();
  return (
    <main
      id="featured_projects"
      className="h-auto flex justify-center pt-20 pb-10 dark:bg-main-black"
    >
      <ul className="flex flex-col gap-10 items-center">
        <li>
          {theme === "light" ? (
            <Image
              className="w-[430px] h-auto"
              src="featuredprojects.svg"
              width={200}
              height={100}
              alt="Featured Projects"
            />
          ) : (
            <Image
              className="w-[430px] h-auto"
              src="featuredprojectsDark.svg"
              width={200}
              height={100}
              alt="Featured Projects"
            />
          )}
        </li>
        <li className="p-5">
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
              url: "/morentNewMobile.svg",
              width: 100,
              height: 50,
              alt: "Morent Logo",
            }}
            seeDetailButton={
              <DetailProjectButton href="/casestudies/morrent" />
            }
          />
        </li>
        <li className="p-5">
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
            seeDetailButton={<DetailProjectButton href="/" />}
          />
        </li>
        <li className="p-5">
          <FeaturedProjectv1
            background="bg-filmpire"
            projectTitle={
              <span className="whitespace-nowrap">
                Filmpire - Movie info
                <br />
                <span className="whitespace-nowrap"> Application</span>
              </span>
            }
            technologies={[
              <Technologies tech1="React" tech2="Material UI" />,
              <Technologies tech1="Redux Toolkit" tech2="TMDB" />,
            ]}
            desktopView={{
              url: "/filmpireDesktop.svg",
              width: 100,
              height: 50,
              alt: "Filmpire Logo",
            }}
            mobileView={{
              url: "/filmpireMobile.svg",
              width: 100,
              height: 50,
              alt: "Filmpire Logo",
            }}
            seeDetailButton={<DetailProjectButton href="/" />}
          />
        </li>
        <li>
          <Link className="hidden md:inline lg:inline" href="/casestudies">
            <ButtonLink text="See more case studies" />
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default FeaturedProjects;
