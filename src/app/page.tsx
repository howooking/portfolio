import About from "@/sections/About";
import Career from "@/sections/Career";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className='h-[2000px]'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
    </main>
  );
}
