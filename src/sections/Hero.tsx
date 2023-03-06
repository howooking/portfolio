"use client";

import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section
      className='hero-img h-svd flex flex-col items-center justify-center bg-cover bg-fixed sm:h-screen'
      id='home'
    >
      <div className='absolute inset-0 z-10 bg-black/10 dark:bg-black/50' />
      <div className='z-20 my-auto flex flex-col items-center gap-2 sm:flex-row sm:gap-20'>
        <Image
          alt=''
          src={profile}
          className='rounded-full'
          placeholder='blur'
          width={250}
          height={250}
        />
        <div className='space-y-3 text-center text-xl font-bold sm:space-y-12 sm:text-4xl'>
          <div className='space-y-1 sm:space-y-8'>
            <h1 className='text-3xl sm:text-6xl'>
              Hi, I&apos;m <span className='text-accent'>Jungwoo</span>
            </h1>
            <p>안녕하세요</p>
            <p>
              웹 프론트앤드 개발자 <span className='text-accent'>이정우</span>
              입니다.
            </p>
            <p>Welcome to My portfolio page</p>
          </div>
          <a href='/#projects' className='btn-accent btn sm:text-xl'>
            프로젝트 보러가기
          </a>
        </div>
      </div>
      <div className='z-20 pb-3'>
        <a href='/#about'>
          <AiOutlineArrowDown size={40} className='animate-bounce' />
        </a>
      </div>
    </section>
  );
}
