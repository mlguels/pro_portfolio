import Image from "next/image";
import { ServicesCard } from ".";
import ServiceIcon1 from "./svgs/ServiceIcon1";
import ServiceIcon2 from "./svgs/ServiceIcon2";
import ServiceIcon3 from "./svgs/ServiceIcon3";

const Services = () => {
  return (
    <main className="bg-main-bg md:h-[500px] p-4 pb-10">
      <section className="flex flex-col pt-10 items-center gap-8">
        <Image src="/services.svg" width={600} height={100} alt="Services" />
        <ul className="flex flex-col md:flex-row gap-12 md:gap-16">
          <li>
            <ServicesCard
              logoInfo={<ServiceIcon1 />}
              title="Analytics & SEO"
              desc="Implement tracking & analytics tools to monitor website performance & improve SEO."
            />
          </li>
          <li>
            <ServicesCard
              logoInfo={<ServiceIcon2 />}
              title="Front-End Dev"
              desc="Front-end dev includes creating the user interface and interactive elements of websites and apps."
            />
          </li>
          <li>
            <ServicesCard
              logoInfo={<ServiceIcon3 />}
              title="Back-End Dev"
              desc="
              Back-end involves building server-side logic, databases, and app functionality that power websites and apps."
            />
          </li>
          <li>
            {" "}
            <ServicesCard
              logoInfo={<ServiceIcon1 />}
              title="Web Optimization"
              desc="Web optimization focuses on improving website performance for a smoother user experience"
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Services;
