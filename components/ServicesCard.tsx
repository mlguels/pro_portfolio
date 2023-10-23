import { ReactNode } from "react";

interface LogoInfo {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface ServicesCardProps {
  logoInfo: ReactNode;
  title: string;
  desc: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  logoInfo,
  title,
  desc,
}) => {
  return (
    <div
      className="
      w-[285px] 
      h-[265px] 
      rounded-xl 
      flex 
      flex-col  
      justify-between
      bg-main-bg 
      dark:hover:bg-primary-light
      p-4 
      ring 
      ring-main-bg 
      dark:ring-black
      dark:shadow-[#1F2E48]
      shadow-md
      shadow-primary-dark 
      hover:shadow-2xl
      hover:shadow-primary-dark
      hover:ring-primary-dark
      hover:bg-primary-dark 
      hover:text-[#FFFF] 
      hover:scale-110 
      md:hover:translate-y-10
      transform 
      transition-transform 
      duration-300 
      ease-in-out
      group
      dark:bg-black"
    >
      <div>{logoInfo}</div>
      <h3 className="font-bold text-2xl transition-colors duration-300 ease-in-out hover:text-[#FFFF] dark:text-[#FFFF]">
        {title}
      </h3>
      <p className="text-white-light transition-colors duration-300 ease-in-out hover:text-[#FFFF] dark:text-[#F3F8FF]">
        {desc}
      </p>
    </div>
  );
};

export default ServicesCard;
