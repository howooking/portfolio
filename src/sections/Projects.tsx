"use client";

import SectionHeading from "@/components/SectionHeading";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Projects() {
  const [currSlide, setCurrSlide] = useState<number>(1);
  const nextSlide = () => {
    setCurrSlide(currSlide === PROJECTS.length - 1 ? 0 : currSlide + 1);
  };
  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? PROJECTS.length - 1 : currSlide - 1);
  };

  return (
    <section className='relative h-screen' id='projects'>
      {PROJECTS.map((project, index) => (
        <>
          <FaArrowCircleLeft
            size={50}
            className='absolute top-[50%] left-8 z-20 animate-bounce cursor-pointer select-none text-accent'
            onClick={prevSlide}
          />
          <div
            key={project.title}
            className={`${
              index === currSlide ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
          >
            {index === currSlide ? (
              <div className='aspect-video'>
                <div className='absolute inset-0 z-10 bg-black/40' />

                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className='object-contain'
                />
                <div className='mockup-code absolute bottom-20 left-1/2 z-20 -translate-x-1/2'>
                  <pre data-prefix='$' className='text-error'>
                    <code>{project.title}</code>
                  </pre>
                  <pre data-prefix='$'>
                    <code>npm i {project.stacks.join(" ")}</code>
                  </pre>
                  <pre data-prefix='>' className='text-warning'>
                    <code>installing...</code>
                  </pre>
                  {project.descs.map((desc, i) => (
                    <>
                      <pre key={i} data-prefix={i + 1} className='text-success'>
                        <code>{desc}</code>
                      </pre>
                    </>
                  ))}
                  <pre data-prefix='>' className='text-info underline'>
                    <code>
                      <a href={project.link} target='_blank'>
                        {project.link}
                      </a>
                    </code>
                  </pre>
                  <pre data-prefix='>' className='text-info underline'>
                    <code>
                      <a href={project.gitHubLink ?? ""} target='_blank'>
                        {project.gitHubLink ?? ""}
                      </a>
                    </code>
                  </pre>
                </div>
              </div>
            ) : null}
          </div>
          <FaArrowCircleRight
            size={50}
            className='absolute top-[50%] right-8 z-20 animate-bounce cursor-pointer select-none text-accent'
            onClick={nextSlide}
          />
        </>
      ))}
    </section>
  );
}
