import Image from "next/image";

interface LogoInfo {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface ServicesCardProps {
  logoInfo: LogoInfo;
  title: string;
  desc: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  logoInfo,
  title,
  desc,
}) => {
  return (
    <div className="w-[285px] h-[265px] rounded-xl bg-main-bg p-4 shadow-lg ring ring-main-bg">
      <Image
        src={logoInfo.url}
        width={logoInfo.width}
        height={logoInfo.height}
        alt={logoInfo.alt}
      />
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-white-light">{desc}</p>
    </div>
  );
};

export default ServicesCard;

/*
      <Image src="/ICON.svg" width={100} height={100} alt="Icon" />
      <h3 className="font-bold text-2xl">Analytics & SEO</h3>
      <p className="text-white-light">
        Implement tracking & analytics <br />
        tools to monitor website <br />
        performance & improve SEO. <br />
      </p> 
*/
