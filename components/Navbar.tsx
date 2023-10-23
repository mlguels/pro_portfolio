"use client";

import Image from "next/image";
import Link from "next/link";

import { Container, Email, Logo } from "@/components";
import { useTheme } from "@/context/theme-context";
import DownloadResume from "./svgs/DownloadResume";
import { useState } from "react";
import X from "./svgs/X";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleNav = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <nav className="w-full z-10 bg-[#F3F8FF] sticky top-0 dark:bg-black">
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
              <li className="flex items-center text-black-200 font-200 transition hover:opacity-50 dark:text-main-bg cursor-pointer pb-1">
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
            <div
              onClick={handleNav}
              className="md:hidden cursor-pointer hover:opacity-50"
            >
              <Image src="/nav.svg" width={25} height={10} alt="nav" />
            </div>
          </div>
        </Container>
      </div>

      <div
        className={
          isDrawerOpen
            ? "md:hidden fixed left-0 top-0 w-full h-[screen] bg-black/40"
            : ""
        }
      >
        <div
          className={
            isDrawerOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-main-bg dark:bg-main-black p-10 ease-in duration-500 rounded-2xl"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Logo />
              </Link>
              <div
                onClick={handleNav}
                className="hover:opacity-50 cursor-pointer"
              >
                <X />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
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
            </ul>
          </div>
          <ul className="flex gap-3">
            <li className="hover:opacity-50 transition">
              <a
                href="https://www.linkedin.com/in/miguel-andres-rodriguez/"
                target="_blank"
                rel="noreferrer"
              >
                {theme === "light" ? (
                  <Image
                    src="/linkedin.svg"
                    width={20}
                    height={10}
                    alt="LinkedIn"
                  />
                ) : (
                  <Image
                    src="/linkedinDark.svg"
                    width={20}
                    height={10}
                    alt="LinkedIn"
                  />
                )}
              </a>
            </li>
            <li className="hover:opacity-50 transition">
              <a
                href="https://github.com/mlguels"
                target="_blank"
                rel="noreferrer"
              >
                {theme === "light" ? (
                  <Image
                    src="/githubIcon.svg"
                    width={20}
                    height={10}
                    alt="LinkedIn"
                  />
                ) : (
                  <Image
                    src="/githubDarks.svg"
                    width={20}
                    height={10}
                    alt="LinkedIn"
                  />
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
