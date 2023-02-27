"use client";

import { Link } from "react-scroll/modules";
import { AiOutlineArrowDown } from "react-icons/ai";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className='hero-img flex h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center'
      id='home'
    >
      <div className='absolute inset-0 z-10 bg-black/10 dark:bg-black/50' />
      <div className='z-20 mx-auto my-auto mb-auto flex max-w-6xl flex-col items-center gap-10 p-5 sm:flex-row'>
        <Image
          alt=''
          src={"/profile.jpg"}
          width={400}
          height={400}
          className='rounded-full'
        />
        <div className='w-[400px] space-y-7 text-center text-xl font-bold'>
          <h1 className='text-3xl'>
            Hi, I&apos;m <span className='text-5xl text-primary'>Jungwoo</span>
          </h1>
          <p>안녕하세요</p>
          <p>웹 프론트앤드 개발자 이정우입니다.</p>
          <Link to='projects' className='btn-primary btn'>
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className='pb-3'>
        <Link to='about'>
          <AiOutlineArrowDown size={40} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
}
