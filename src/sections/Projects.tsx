"use client";

import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Projects() {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const nextSlide = () => {
    setCurrSlide(currSlide === PROJECTS.length - 1 ? 0 : currSlide + 1);
  };
  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? PROJECTS.length - 1 : currSlide - 1);
  };

  return (
    <section className='sec-h relative' id='projects'>
      <FaArrowCircleLeft
        size={"5vw"}
        className='icon-position absolute left-8 z-20 animate-ping cursor-pointer select-none text-base-100 hover:text-accent'
        onClick={prevSlide}
        style={{ maxWidth: "30px" }}
      />
      <FaArrowCircleRight
        size={"5vw"}
        className='absolute top-[50%] right-8 z-20 animate-ping cursor-pointer select-none text-base-100 hover:text-accent'
        onClick={nextSlide}
        style={{ maxWidth: "30px" }}
      />
      {PROJECTS.map((project, index) => (
        <div
          key={project.title}
          className={`${
            index === currSlide ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 ease-in-out`}
        >
          {index === currSlide ? (
            <div className='sec-h relative mx-auto sm:aspect-video'>
              <div className='absolute inset-0 z-10 bg-black/40 dark:bg-black/60' />
              <Image
                src={project.img}
                alt={project.title}
                fill
                className='object-cover'
              />
              <div className='code-width mockup-code absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-[10px] sm:w-2/5 sm:text-base'>
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
                  <pre key={i} data-prefix={i + 1} className='text-success'>
                    <code>{desc}</code>
                  </pre>
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
      ))}
    </section>
  );
}
