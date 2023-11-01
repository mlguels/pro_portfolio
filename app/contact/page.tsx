"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useTheme } from "@/context/theme-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { theme } = useTheme();
  const [state, handleSubmit] = useForm("xjvqjvqd");
  const router = useRouter();

  const email = "mrodandres@icloud.com";
  const subject = "Hello";

  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    if (state.succeeded) {
      router.push("/");
      toast.success("Message Sent!", {
        duration: 2000,
        position: "top-center",

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  }, [router, state.succeeded]);

  return (
    <main>
      <Toaster />
      <section className="bg-main-bg dark:bg-black h-[350px] items-center pt-24 p-8">
        <ul className="flex flex-col items-center gap-6">
          <li>
            {theme === "light" ? (
              <Image
                src="/getintouch.svg"
                width={425}
                height={50}
                alt="case studes"
              />
            ) : (
              <Image
                src="/getinTouchDark.svg"
                width={425}
                height={50}
                alt="case studes"
              />
            )}
          </li>
          <li>
            <p className="text-white-light text-lg">
              Let&apos;s Collaborate on Your Next Project
            </p>
          </li>
        </ul>
      </section>

      <section className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-60 pt-16 p-5">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl dark:text-[#FFFFFF]">My Socials</h3>
          <div className="flex gap-2">
            <a
              href="https://github.com/mlguels"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50 transition"
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
            <a
              href="https://www.linkedin.com/in/miguel-andres-rodriguez/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50 transition"
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
          </div>
          <div>
            <h3 className="text-xl pb-4 dark:text-[#FFFFFF]">Email Address</h3>
            <p className="flex gap-3 items-center text-[#778295] font-semibold dark:text-[#FFFF] text-xl">
              <span>
                <button onClick={handleClick}>
                  <Image
                    src="/Message.svg"
                    width={20}
                    height={10}
                    alt="linked in"
                    className="hover:opacity-50 transition cursor-pointer"
                  />
                </button>
              </span>
              mrodandres@icloud.com
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-2">
              <label className="dark:text-[#FFFFFF]" htmlFor="subject">
                Subject
              </label>
              <input
                className="bg-[#F3F8FF] dark:bg-[#192333] rounded-lg p-2 border border-[#CCE1FF] dark:border-[#2C3C56] focus:text-main-bg"
                name="subject"
                id="subject"
              />
              <ValidationError
                prefix="subject"
                field="subject"
                errors={state.errors}
              />
            </li>
            <li className="flex flex-col gap-2">
              <label
                className="dark:text-[#FFFFFF] focus:text-main-bg"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={5}
                id="message"
                name="message"
                className="bg-[#F3F8FF] dark:bg-[#192333] rounded-lg p-2 border border-[#CCE1FF] dark:border-[#2C3C56] focus:text-main-bg"
              />
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
            </li>
            <li className="flex flex-col gap-2">
              <label className="dark:text-[#FFFFFF]">
                Best way to reach out to you?{" "}
                <span className="text-[#778295]">
                  eg. phone number or email
                </span>
              </label>
              <input
                className="bg-[#F3F8FF] dark:bg-[#192333] rounded-lg p-2 border border-[#CCE1FF] dark:border-[#2C3C56] focus:text-main-bg"
                id="info"
                name="info"
              />
              <ValidationError
                prefix="info"
                field="info"
                errors={state.errors}
              />
            </li>
            <li className="self-end">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary-dark dark:bg-primary-light text-[#FFFF] text-sm flex items-center gap-3 py-4 px-52 md:px-12 rounded-3xl hover:opacity-80"
              >
                Send
              </button>
            </li>
          </ul>
        </form>
      </section>
    </main>
  );
};

export default Contact;
