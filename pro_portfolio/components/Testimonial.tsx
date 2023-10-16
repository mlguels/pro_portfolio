import Image from "next/image";

interface personImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface TestimonialProps {
  image: personImage;
  testimony: string;
  name: string;
  info: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  testimony,
  name,
  info,
}) => {
  return (
    <main className="p-5">
      <section className="flex flex-col md:flex-row gap-10 pt-20">
        <Image
          className="w-auto h-auto md:w-[328px] md:h-[328px]"
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
        <ul className="flex flex-col gap-8 pt-5">
          <li>
            <Image src="/Stars.svg" width={100} height={10} alt="Stars" />
          </li>
          <li>
            <p className="text-white-light text-xl max-w-xl dark:text-main-bg">
              {testimony}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <h4 className="text-[#192333] font-semibold dark:text-main-bg">
              - {name}
            </h4>
            <p className="text-white-light dark:text-main-bg">{info}</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Testimonial;
