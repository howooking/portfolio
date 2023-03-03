"use client";

import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section
      className='hero-img mobile-sec-h flex flex-col items-center justify-center bg-cover bg-fixed bg-center sm:h-screen'
      id='home'
    >
      <div className='absolute inset-0 z-10 bg-black/10 dark:bg-black/50' />
      <div className='z-20 my-auto flex flex-col items-center gap-2 sm:flex-row sm:gap-20'>
        <Image
          alt=''
          src='/images/profile.jpg'
          width={250}
          height={250}
          className='rounded-full'
          priority
        />
        <div className='space-y-3 text-center text-xl font-bold sm:space-y-12 sm:text-5xl'>
          <div className='space-y-1 sm:space-y-8'>
            <h1 className='text-3xl sm:text-7xl'>
              Hi, I&apos;m <span className='text-accent'>Jungwoo</span>
            </h1>
            <p>안녕하세요</p>
            <p>웹 프론트앤드 개발자 이정우입니다.</p>
            <p>Welcome to My portfolio page</p>
          </div>
          <a href='/#projects' className='btn-accent btn'>
            프로젝트 보러가기
          </a>
        </div>
      </div>
      <div className='z-30 pb-3'>
        <a href='/#about'>
          <AiOutlineArrowDown size={40} className='animate-bounce' />
        </a>
      </div>
    </section>
  );
}
