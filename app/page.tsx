import Hero from "@/app/hero/Hero";
import About from "@/app/about/About";
import Experience from "@/app/experience/Experience";
import Projects from "@/app/projects/Projects";
import Skills from "@/app/skills/Skills";
import Contact from "@/app/contact/Contact";
import { SectionDivider } from "@/components/constellation/SectionDivider";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </div>
  );
}
