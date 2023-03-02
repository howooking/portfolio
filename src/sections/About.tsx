"use client";

import SectionHeading from "@/components/SectionHeading";
import { I_AM } from "@/constants/iam";
import { SKILLS } from "@/constants/skills";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import lottieJson from "../../public/images/developer.json";

export default function About() {
  return (
    <section className='flex h-screen' id='about'>
      <div className='relative hidden h-screen w-1/3 sm:block'>
        <Image
          alt='about'
          src='/images/about.jpg'
          fill
          className='object-cover'
        />
      </div>
      <div className='flex h-screen w-2/3 flex-col items-center justify-center'>
        <SectionHeading>About Me</SectionHeading>

        <div>
          <div className='text-center text-xl font-bold text-accent'>
            <span className='text-neutral dark:text-white'>I am a </span>
            <Typewriter words={I_AM} cursor loop={false} delaySpeed={3000} />
          </div>
          <div className='text-center'>
            <p>안녕하세요. 저는 수의사 개발자 이정우 입니다.</p>
            <p>프로그래밍을 통해 사람과 반려동물의 삶을 바꾸고자합니다.</p>
          </div>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 450, height: 350 }}
          />
          <SectionHeading>Skills I Like to Use</SectionHeading>
          <div className='flex justify-center gap-3'>
            {SKILLS?.map((skill) => (
              <Image
                key={skill.title}
                src={`/stacks/${skill.img}`}
                width={40}
                height={40}
                alt={skill.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
