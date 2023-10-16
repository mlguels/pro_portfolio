"use client";

import Image from "next/image";
import Link from "next/link";

import { Container, Logo } from "@/components";
import { useTheme } from "@/context/theme-context";

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
                <li className="text-primary-dark hover:scale-[1.15] active:scale-105 transition">
                  Home
                </li>
              </Link>
              <Link href="/casestudies">
                <li className="text-white-light hover:scale-[1.15] active:scale-105 transition">
                  Case Studies
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-white-light hover:scale-[1.15] active:scale-105 transition">
                  Contact
                </li>
              </Link>
              <li className="flex gap-2 text-black-200 font-200 hover:scale-[1.15] active:scale-105 transition">
                <Image
                  src="/Vector.svg"
                  width={13}
                  height={13}
                  alt="Download"
                />
                <span>Resume</span>
              </li>
              <li className="text-white-light">|</li>
              <li>
                <button
                  className="hover:scale-[1.15] active:scale-105 transition"
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
