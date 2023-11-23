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
  seeDetailButton: React.ReactNode;
  background: string;
}

const FeaturedProjectv2: React.FC<FeaturedProjectv1Props> = ({
  projectTitle,
  technologies,
  desktopView,
  mobileView,
  seeDetailButton,
  background,
}) => {
  return (
    <main
      className={`${background} min-w-[445px] h-auto md:w-[1200px] md:h-[444px] rounded-2xl p-6`}
    >
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <section>
          <ul className="flex flex-col p-8 gap-8">
            <li className="text-4xl lg:text-5xl text-[#FFFF] font-bold">
              {projectTitle}
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              {technologies.map((tech, index) => (
                <div key={index}>{tech}</div>
              ))}
            </li>
            <li>{seeDetailButton}</li>
          </ul>
        </section>
        <section>
          <ul className="flex items-center md:gap-10 mt-12">
            <li>
              <Image
                className="w-[1000px] h-auto"
                src={desktopView.url}
                width={desktopView.width}
                height={desktopView.height}
                alt={desktopView.alt}
              />
            </li>
            <li className="md:-mx-6">
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

export default FeaturedProjectv2;
