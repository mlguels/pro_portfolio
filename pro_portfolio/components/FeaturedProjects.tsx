import Image from "next/image";

const FeaturedProjects = () => {
  return (
    <main>
      <section>
        <ul>
          <li>
            <Image
              className="w-[430px] h-auto"
              src="featuredprojects.svg"
              width={200}
              height={100}
              alt="Featured Projects"
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FeaturedProjects;
