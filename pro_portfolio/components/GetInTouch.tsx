import Image from "next/image";

import { ButtonLink } from ".";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <main className="flex items-center justify-center pt-10 pb-10 p-10">
      <div
        className="bg-[#FFBE62] bg-cover bg-center md:w-[1230px] md:h-[300px] rounded-lg"
        style={{
          backgroundImage: 'url("/touch.svg")',
        }}
      >
        <ul className="flex flex-col md:flex-row items-center md:gap-96">
          <li className="p-5 md:pl-14 md:pt-16">
            <Image
              className="w-[400px] md:w-[500px]"
              src="/touch2.svg"
              width={100}
              height={50}
              alt="Have a project in mind?"
            />
          </li>
          <li className="p-5 md:p-0 md:pt-32">
            <Link href="/contact">
              <ButtonLink text="Get in touch with me" />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default GetInTouch;
