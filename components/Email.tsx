"use client";

import { useRef } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const Email: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleCopyEmail = () => {
    if (emailRef.current) {
      navigator.clipboard.writeText(emailRef.current.value);
      toast.success("Email Copied", {
        duration: 2000,
        position: "top-center",

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  };

  return (
    <main>
      <Toaster />
      <div
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
        <div className="flex justify-center items-center">
          <button onClick={handleCopyEmail}>
            <Image
              className="min-w-fit"
              src="/emailVector.svg"
              width={15}
              height={5}
              alt="copy logo"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Email;
