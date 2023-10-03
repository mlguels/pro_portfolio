import { ButtonLink } from "@/components";
import Image from "next/image";
import { text } from "stream/consumers";

const Contact = () => {
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

      <section className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col">
          <h3>My Socials</h3>
          <div className="flex gap-2">
            <Image src="/githubIcon.svg" width={20} height={10} alt="github" />
            <Image src="/linkedIn.svg" width={20} height={10} alt="linked in" />
          </div>
          <div>
            <h3>Email Address</h3>
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

        <ul className="flex flex-col gap-8">
          <li className="flex flex-col">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="bg-input py-2 rounded-lg"
              name="subject"
              id="subject"
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              className="bg-input py-8 rounded-lg"
            />
          </li>
          <li>
            <label htmlFor="">
              Best way to reach out to you?{" "}
              <span className="text-[#778295]">eg. phone number or email</span>
            </label>
            <input type="text" />
          </li>
          <li>
            <button
              type="submit"
              className="bg-primary-dark text-[#FFFF] text-sm flex items-center gap-3 py-4 px-36 md:px-12 rounded-3xl"
            >
              Send
            </button>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
