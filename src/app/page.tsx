import About from "@/sections/About";
import Comments from "@/sections/comments";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Comments />
      <Footer />
    </main>
  );
}
