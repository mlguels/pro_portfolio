import Image from "next/image";

const Services = () => {
  return (
    <main className="bg-main-bg h-screen">
      <section className="flex flex-col pt-10 items-center gap-8">
        <Image src="/services.svg" width={600} height={100} alt="Services" />
        <div className="w-[285px] h-[265px] rounded-xl bg-main-bg p-4 shadow-lg ring ring-main-bg">
          <Image src="/ICON.svg" width={100} height={100} alt="Icon" />
          <h3 className="font-bold text-2xl">Analytics & SEO</h3>
          <p className="text-white-light">
            Implement tracking & analytics <br />
            tools to monitor website <br />
            performance & improve SEO. <br />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Services;
