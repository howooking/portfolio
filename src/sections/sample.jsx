import Image from "next/image";

export default function About() {
  return (
    <div className='flex'>
      <Image
        alt=''
        src='/images/about.jpg'
        width={500}
        height={1000}
        className='rounded-3xl'
      />
      <div className=''>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iusto
          quisquam earum. Deleniti totam pariatur laudantium. Corporis
          consequuntur dolorem suscipit est dolore adipisci quos dicta
          praesentium optio, eius quis fuga?
        </p>
      </div>
    </div>
  );
}
