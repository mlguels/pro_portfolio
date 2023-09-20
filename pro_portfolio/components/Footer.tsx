import Image from "next/image";

const Footer = () => {
  return (
    <main className="pt-14 pb-14 pl-16 pr-16">
      <section className="flex justify-between">
        <p className="text-[#778295]">© 2023 Miguel. All rights reserved</p>
        <ul className="flex gap-3">
          <li>
            <Image src="/linkedin.svg" width={20} height={10} alt="LinkedIn" />
          </li>
          <li>
            <Image
              src="/githubIcon.svg"
              width={20}
              height={10}
              alt="LinkedIn"
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Footer;
