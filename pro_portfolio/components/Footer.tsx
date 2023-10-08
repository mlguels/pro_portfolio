import Image from "next/image";

const Footer = () => {
  return (
    <main className="pt-14 pb-14 pl-16 pr-16">
      <section className="flex justify-between">
        <p className="text-[#778295]"> © 2023 Miguel. All rights reserved </p>
        <ul className="flex gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/miguel-andres-rodriguez/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/linkedin.svg"
                width={20}
                height={10}
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mlguels"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/githubIcon.svg"
                width={20}
                height={10}
                alt="LinkedIn"
              />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Footer;
