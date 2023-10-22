import Image from "next/image";

interface ButtonLinkProps {
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text }) => {
  return (
    <button className="bg-primary-dark text-[#FFFF] flex items-center gap-3 py-4 px-36 md:px-8 rounded-3xl dark:bg-primary-light whitespace-nowrap">
      {text}
      <span>
        <Image
          className=""
          src="/arrow.svg"
          width={14}
          height={10}
          alt="Arrow"
        />
      </span>
    </button>
  );
};

export default ButtonLink;
