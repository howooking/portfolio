"use client";

import About from "@/sections/About";
import Comments from "@/sections/comments";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Sample from "@/sections/sample";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted) {
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
  return <></>;
}
