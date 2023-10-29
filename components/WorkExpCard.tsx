import Image from "next/image";

const content = [
  {
    title: "JSM Pro Master Class",
    desc: "Full-Stack Developer - 6 months +",
    url: "/jsmlogl.webp",
  },
];

// interface ImageLogo {
//   url: string;
//   width: number;
//   height: number;
//   alt: string;
// }

interface WorkExpCardProps {}

const WorkExpCard: React.FC<WorkExpCardProps> = ({}) => {
  return (
    <main className="bg-[#F3F8FF] flex w-[400px] h-[150px] md:w-[607px] md:h-[120px] rounded-2xl hover:shadow-lg hover:scale-105 hover:translate-x-10 duration-300 ease-in-out">
      {content.map((job, key) => (
        <ul key={key} className="flex items-center p-6 justify-start gap-4">
          <li>
            <Image src={job.url} width={50} height={50} alt="Logo" />
          </li>
          <li>
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p>{job.desc}</p>
          </li>
        </ul>
      ))}
    </main>
  );
};

export default WorkExpCard;
