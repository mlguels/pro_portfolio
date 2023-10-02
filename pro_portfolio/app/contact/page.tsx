import Image from "next/image";

const Contact = () => {
  return (
    <main>
      <section className="bg-main-bg h-[400px] items-center pt-24 p-8">
        <ul className="flex flex-col items-center gap-6">
          <li>
            <Image
              src="/getintouch.svg"
              width={500}
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

      <section>
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

        <ul>
          <li>
            <label htmlFor="">Subject</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="">Message</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="">
              Best way to reach out to you?{" "}
              <span>eg. phone number or email</span>
            </label>
            <input type="text" />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
