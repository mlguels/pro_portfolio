import {
  Hero,
  MySkills,
  Services,
  WorkExp,
  FeaturedProjects,
  About,
  GetInTouch,
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
      <GetInTouch />
    </main>
  );
}
