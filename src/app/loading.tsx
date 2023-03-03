import Image from "next/image";

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Image
        alt='spinner'
        src='/images/spinner.svg'
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
