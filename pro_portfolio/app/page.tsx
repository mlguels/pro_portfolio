import {
  Hero,
  MySkills,
  Services,
  WorkExp,
  FeaturedProjects,
  About,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <MySkills />
      <Services />
      <WorkExp />
      <FeaturedProjects />
      <About />
    </main>
  );
}
