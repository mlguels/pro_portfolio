"use client";

import Image from "next/image";
import Link from "next/link";

import { Container, Logo } from "@/components";
import { useTheme } from "@/context/theme-context";
import DownloadResume from "./svgs/DownloadResume";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="w-full z-10 bg-[#F3F8FF] sticky top-0 dark:bg-black">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <ul className="hidden md:flex gap-4">
              <Link href="/">
                <li className="text-primary-dark hover:opacity-50 transition dark:text-primary-light">
                  Home
                </li>
              </Link>
              <Link href="/casestudies">
                <li className="text-white-light hover:opacity-50 transition dark:text-main-bg">
                  Case Studies
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-white-light hover:opacity-50 transition dark:text-main-bg">
                  Contact
                </li>
              </Link>
              <li className="flex items-center pb-2 text-black-200 font-200 transition hover:opacity-50 dark:text-main-bg cursor-pointer ">
                {/* <Image
                  src="/Vector.svg"
                  width={13}
                  height={13}
                  alt="Download"
                /> */}
                <DownloadResume />
                <span>Resume</span>
              </li>
              <li className="text-white-light">|</li>
              <li>
                <button
                  className="hover:opacity-50 transition"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <Image
                      src="/Light.svg"
                      width={20}
                      height={20}
                      alt="LightMode"
                    />
                  ) : (
                    <Image
                      src="/Dark.svg"
                      width={20}
                      height={20}
                      alt="LightMode"
                    />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Nav;
