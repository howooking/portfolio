export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className='pb-4 text-center text-2xl font-bold sm:text-3xl'>
      {children}
    </h2>
  );
}
