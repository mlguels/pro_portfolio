import Image from "next/image";
import { Container, Logo } from "@/components";

const Nav = () => {
  return (
    <main className="fixed w-full z-10 bg-[#F3F8FF] shadow-sm">
      <div className="py-4">
        <Container>
          <ul className="flex items-center justify-between">
            <li>
              <Logo />
            </li>
            <ul className="flex gap-4">
              <li className="text-primary-dark">Home</li>
              <li className="text-white-light">Case Studies</li>
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
          </ul>
        </Container>
      </div>
    </main>
  );
};

export default Nav;
