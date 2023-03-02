import About from "@/sections/About";
import Career from "@/sections/Career";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Career />
      <Footer />
    </main>
  );
}
