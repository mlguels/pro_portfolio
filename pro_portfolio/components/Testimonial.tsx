import Image from "next/image";

interface personImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface TestimonialProps {
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
    <main>
      <section>
        <Image
          className="w-[300px] h-auto"
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
        <ul>
          <li>Stars</li>
          <li>
            <p>{testimony}</p>
          </li>
          <li>
            <h4>{name}</h4>
          </li>
          <li>
            <p>{info}</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Testimonial;
