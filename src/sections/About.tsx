import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section className='h-screen' id='about'>
      <SectionHeading>About</SectionHeading>
      <Container>
        <p>adfajsdfhajksdfhakjshflk</p>
      </Container>
      <div className='flex h-[200px] w-full flex-col-reverse justify-start bg-slate-300'>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    </section>
  );
}
