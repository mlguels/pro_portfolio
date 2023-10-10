"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvqjvqd");
  if (state.succeeded) {
    return <p>Email Sent!</p>;
  }
  return (
    <main>
      <section className="bg-main-bg h-[350px] items-center pt-24 p-8">
        <ul className="flex flex-col items-center gap-6">
          <li>
            <Image
              src="/getintouch.svg"
              width={425}
              height={50}
              alt="case studes"
            />
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
          <h3 className="text-lg">My Socials</h3>
          <div className="flex gap-2">
            <a
              href="https://github.com/mlguels"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/githubIcon.svg"
                width={20}
                height={10}
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-andres-rodriguez/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/linkedIn.svg"
                width={20}
                height={10}
                alt="linked in"
              />
            </a>
          </div>
          <div>
            <h3 className="text-lg pb-4">Email Address</h3>
            <p className="flex gap-3 items-center text-[#778295] font-semibold">
              <span>
                {" "}
                <Image
                  src="/Message.svg"
                  width={20}
                  height={10}
                  alt="linked in"
                />
              </span>
              mrodandres@icloud.com
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <input
                className="bg-input rounded-lg opacity-50 p-2"
                name="subject"
                id="subject"
              />
              <ValidationError
                prefix="subject"
                field="subject"
                errors={state.errors}
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                rows={5}
                id="message"
                name="message"
                className="bg-input rounded-lg opacity-50 p-2"
              />
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
            </li>
            <li className="flex flex-col">
              <label>
                Best way to reach out to you?{" "}
                <span className="text-[#778295]">
                  eg. phone number or email
                </span>
              </label>
              <input
                className="bg-input rounded-lg opacity-50 p-2"
                id="info"
                name="info"
              />
              <ValidationError
                prefix="info"
                field="info"
                errors={state.errors}
              />
            </li>
            <li>
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary-dark text-[#FFFF] text-sm flex items-center gap-3 py-4 px-52 md:px-12 rounded-3xl"
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
