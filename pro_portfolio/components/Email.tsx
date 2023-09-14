import Image from "next/image";

const Email = () => {
  return (
    <p className="text-[#6F74A7] flex items-center gap-3 text-lg font-bold py-4 px-5 rounded-2xl bg-[#FFFF] hover:cursor-copy">
      mrodandres@icloud.com
      <span>
        <Image
          className="min-w-fit"
          src="/emailVector.svg"
          width={15}
          height={5}
          alt="copy logo"
        />
      </span>
    </p>
  );
};

export default Email;
