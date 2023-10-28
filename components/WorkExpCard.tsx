import Image from "next/image";

const content = [
  {
    title: "JSM Pro Master Class",
    desc: "Full-Stack Developer - 6 months +",
    url: "/jsmlogl.webp",
  },
  {
    title: "Another Job Title",
    desc: "Another job description.",
    url: "/jsmlogl.webp",
  },
  {
    title: "Yet Another Job",
    desc: "This is the description for another job.",
    url: "/jsmlogl.webp",
  },
  {
    title: "One More Job",
    desc: "This is the description for one more job.",
    url: "/jsmlogl.webp",
  },
];

interface ImageLogo {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface WorkExpCardProps {
  imageLogo: ImageLogo;
  title: string;
  desc: string;
  show: boolean;
}

const WorkExpCard: React.FC<WorkExpCardProps> = ({
  imageLogo,
  title,
  desc,
}) => {
  return (
    <main className="bg-[#F3F8FF] flex w-[400px] h-[150px] md:w-[607px] md:h-[120px] rounded-2xl hover:shadow-lg hover:scale-105 hover:translate-x-10 duration-300 ease-in-out">
      <ul className="flex items-center p-6 justify-start gap-4">
        <li>
          <Image
            src={imageLogo.url}
            width={imageLogo.width}
            height={imageLogo.height}
            alt={imageLogo.alt}
          />
        </li>
        <li>
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{desc}</p>
        </li>
      </ul>
    </main>
  );
};

export default WorkExpCard;
