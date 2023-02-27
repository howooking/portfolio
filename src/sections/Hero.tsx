import Image from "next/image";

export default function Hero() {
  return (
    <section className='hero-img flex h-screen items-center justify-center bg-cover bg-fixed bg-center'>
      <div className='absolute inset-0 z-10 bg-black/10 dark:bg-black/50' />
      <div className='z-20 mx-auto flex max-w-6xl flex-col items-center gap-10 p-5 sm:flex-row'>
        <Image
          alt=''
          src={"/profile.jpg"}
          width={400}
          height={400}
          className='rounded-full'
        />
        <div className='space-y-7 text-center font-bold'>
          <h1 className='text-3xl'>이정우</h1>
          <p>안녕하세요</p>
          <p>수의사 개발자 이정우입니다.</p>
          <p>끊임없이 공부하는 웹프론트엔드 개발자입니다.</p>
        </div>
      </div>
    </section>
  );
}
