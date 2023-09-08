"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="md:block cursor-pointer"
      height={50}
      width={50}
      src="/Logo.svg"
      priority
    />
  );
};

export default Logo;
