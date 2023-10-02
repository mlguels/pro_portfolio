import Image from "next/image";
import { Container, Logo } from "@/components";
import Link from "next/link";

const Nav = () => {
  return (
    <main className="w-full z-10 bg-[#F3F8FF] sticky top-0">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <ul className="hidden md:flex gap-4">
              <Link href="/">
                <li className="text-primary-dark">Home</li>
              </Link>
              <Link href="/casestudies">
                <li className="text-white-light">Case Studies</li>
              </Link>
              <li className="text-white-light">Contact</li>
              <li className="flex gap-2 text-black-200 font-200">
                <Image
                  src="/Vector.svg"
                  width={13}
                  height={13}
                  alt="Download"
                />
                <span>Resume</span>
              </li>
              <li className="text-white-light">|</li>
              <li className="text-primary-dark">
                <Image
                  className="hover: cursor-not-allowed"
                  src="/Light.svg"
                  width={20}
                  height={20}
                  alt="LightMode"
                />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Nav;
