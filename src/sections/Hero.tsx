"use client";

import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section
      className='hero-img flex h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center'
      id='home'
    >
      <div className='absolute inset-0 z-10 bg-black/10 dark:bg-black/50' />
      <div className='z-20 my-auto flex flex-col items-center gap-10 sm:flex-row'>
        <Image
          alt=''
          src='/images/profile.jpg'
          width={290}
          height={290}
          className='rounded-full'
          priority
        />
        <div className='space-y-7 text-center text-xl font-bold'>
          <h1 className='text-3xl'>
            Hi, I&apos;m <span className='text-4xl text-accent'>Jungwoo</span>
          </h1>
          <p>안녕하세요</p>
          <p>웹 프론트앤드 개발자 이정우입니다.</p>
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
