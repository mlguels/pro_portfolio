interface TechnologiesProps {
  tech1: string;
  tech2: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ tech1, tech2 }) => {
  return (
    <div className="py-3 px-4 w-fit rounded-md bg-[rgb(255,255,255)] bg-opacity-30">
      <button className="text-[#FFFF] text-opacity-100 font-light">
        {tech1}, {tech2}
      </button>
    </div>
  );
};

export default Technologies;
