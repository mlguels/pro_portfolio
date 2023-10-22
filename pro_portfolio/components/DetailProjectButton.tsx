import Image from "next/image";
import Link from "next/link";

interface DetailProjectButtonProps {
  href: string;
}

const DetailProjectButton: React.FC<DetailProjectButtonProps> = ({ href }) => {
  return (
    <Link href={href} className="hover:opacity-50 transition">
      <Image
        src="/seeDetailProject.svg"
        width={200}
        height={50}
        alt="See Detail Project"
      />
    </Link>
  );
};

export default DetailProjectButton;
