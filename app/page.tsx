import Hero from "@/app/hero/Hero";
import About from "@/app/about/About";
import Experience from "@/app/experience/Experience";
import Projects from "@/app/projects/Projects";
import Skills from "@/app/skills/Skills";
import Contact from "@/app/contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
