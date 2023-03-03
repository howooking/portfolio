"use client";

import SectionHeading from "@/components/SectionHeading";
import { I_AM } from "@/constants/iam";
import { SKILLS } from "@/constants/skills";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import lottieJson from "../../public/images/developer.json";
import { AiOutlineArrowDown } from "react-icons/ai";
import ResponsiveLottie from "@/components/ResponsiveLottie";

export default function About() {
  return (
    <section className='sec-h relative flex overflow-hidden' id='about'>
      <div className='relative hidden h-screen w-1/3 overflow-hidden sm:block'>
        <Image
          alt='about'
          src='/images/about.jpg'
          fill
          className=' object-cover'
        />
      </div>
      <div className='sec-h flex flex-col items-center justify-center sm:w-2/3'>
        <SectionHeading>About Me</SectionHeading>
        <div>
          <div className='text-center text-xl font-bold text-accent'>
            <span className='text-neutral dark:text-white'>I am a </span>
            <Typewriter words={I_AM} cursor loop={false} delaySpeed={3000} />
          </div>
          <div className='px-2 text-center text-sm sm:text-base'>
            <p>안녕하세요😁😁</p>
            <p>저는 수의사 && 개발자 이정우입니다.</p>
            <p>프로그래밍을 통해 사람과 반려동물의 삶을 바꾸고자합니다.</p>
          </div>
          <ResponsiveLottie />
          <SectionHeading>Skills I Like to Use</SectionHeading>
          <div className='flex justify-center gap-3'>
            {SKILLS.map((skill, index) => (
              <div
                key={skill.title}
                className='wave relative h-5 w-5 sm:h-14 sm:w-14'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image src={`/stacks/${skill.img}`} fill alt={skill.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 z-30 -translate-x-1/2 pb-3'>
        <a href='/#projects'>
          <AiOutlineArrowDown size={40} className='animate-bounce' />
        </a>
      </div>
    </section>
  );
}
