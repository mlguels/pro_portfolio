"use client";

import { useRef } from "react";
import Image from "next/image";

const Email: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleCopyEmail = () => {
    if (emailRef.current) {
      const emailText = emailRef.current.value;

      navigator.clipboard
        .writeText(emailText)
        .then(() => {
          alert("Email copied to clipboard: " + emailText);
        })
        .catch((err) => {
          console.error("Error copying email to clipboard: ", err);
        });
    }
  };

  return (
    <p
      className="
      text-[#6F74A7] 
      flex 
      justify-between 
      items-center 
      gap-5
      text-xl
      font-semibold 
      py-6
      px-10
      rounded-3xl 
      bg-[#FFFF] 
      dark:bg-main-black
      dark:text-[#FFFF]
      font-pop
      hover:opacity-50 
      transition
      "
    >
      <input
        ref={emailRef}
        type="text"
        defaultValue="mrodandres@icloud.com"
        className="hidden"
      />
      mrodandres@icloud.com
      <span className="flex justify-center items-center">
        <button onClick={handleCopyEmail}>
          <Image
            className="min-w-fit"
            src="/emailVector.svg"
            width={15}
            height={5}
            alt="copy logo"
          />
        </button>
      </span>
    </p>
  );
};

export default Email;