import Image from "next/image";
import { ServicesCard } from ".";

const Services = () => {
  return (
    <main className="bg-main-bg h-screen">
      <section className="flex flex-col pt-10 items-center gap-8">
        <Image src="/services.svg" width={600} height={100} alt="Services" />
        <ul>
          <li>
            <ServicesCard
              logoInfo={{
                url: "/ICON.svg",
                width: 100,
                height: 100,
                alt: "Icon",
              }}
              title="Analytics & SEO"
              desc="Implement tracking & analytics tools to monitor website performance & improve SEO."
            />
          </li>
          <li>
            <ServicesCard
              logoInfo={{
                url: "/ICON.svg",
                width: 100,
                height: 100,
                alt: "Icon",
              }}
              title="Analytics & SEO"
              desc="Implement tracking & analytics tools to monitor website performance & improve SEO."
            />
          </li>
          <li>
            <ServicesCard
              logoInfo={{
                url: "/ICON.svg",
                width: 100,
                height: 100,
                alt: "Icon",
              }}
              title="Analytics & SEO"
              desc="Implement tracking & analytics tools to monitor website performance & improve SEO."
            />
          </li>
          <li>
            {" "}
            <ServicesCard
              logoInfo={{
                url: "/ICON.svg",
                width: 100,
                height: 100,
                alt: "Icon",
              }}
              title="Analytics & SEO"
              desc="Implement tracking & analytics tools to monitor website performance & improve SEO."
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Services;
