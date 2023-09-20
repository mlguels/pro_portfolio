import Image from "next/image";

const DetailProjectButton = () => {
  return (
    <button>
      <Image
        src="/seeDetailProject.svg"
        width={200}
        height={50}
        alt="See Detail Project"
      />
    </button>
  );
};

export default DetailProjectButton;
