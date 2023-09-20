import Image from "next/image";

interface desktopImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}
interface mobileImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface FeaturedProjectv1Props {
  projectTitle: React.ReactNode;
  technologies: React.ReactNode[];
  desktopView: desktopImage;
  mobileView: mobileImage;
}

const FeaturedProjectv1: React.FC<FeaturedProjectv1Props> = ({
  projectTitle,
  technologies,
  desktopView,
  mobileView,
}) => {
  return (
    <main className="bg-[#416CEA] w-auto h-auto lg:w-[1200px] lg:h-[444px] rounded-2xl">
      <section className="flex flex-col md:flex-row items-center p-10">
        <section>
          <ul className="flex flex-col p-8 gap-8">
            <li className="text-5xl text-[#FFFF] font-bold">{projectTitle}</li>
            <li className="flex flex-col md:flex-row gap-4">
              {technologies.map((tech, index) => (
                <div key={index}>{tech}</div>
              ))}
            </li>
            <li>
              <button>See Detail Project</button>
            </li>
          </ul>
        </section>
        <section className="">
          <ul className="flex items-center md:gap-10 mt-12">
            <li>
              <Image
                className="w-auto h-auto"
                src={desktopView.url}
                width={desktopView.width}
                height={desktopView.height}
                alt={desktopView.alt}
              />
            </li>
            <li className="md:-mx-10">
              <Image
                className="w-auto h-auto"
                src={mobileView.url}
                width={mobileView.width}
                height={mobileView.height}
                alt={mobileView.alt}
              />
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default FeaturedProjectv1;
