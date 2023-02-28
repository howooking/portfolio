"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { SKILLS } from "@/constants/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section className='h-screen bg-orange-100' id='skills'>
      <SectionHeading>Skills</SectionHeading>
      <Container>
        {SKILLS?.map((skill) => (
          <Image
            key={skill.title}
            src={`/stacks/${skill.img}`}
            width={50}
            height={50}
            alt={skill.title}
          />
        ))}
      </Container>
    </section>
  );
}
