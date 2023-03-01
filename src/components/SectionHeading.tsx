export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className='py-1 text-center text-2xl font-bold sm:text-6xl'>
      {children}
    </h2>
  );
}
