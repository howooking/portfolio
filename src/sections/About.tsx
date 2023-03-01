import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section className='h-screen' id='about'>
      <SectionHeading>About</SectionHeading>
      <Container>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iusto
          quisquam earum. Deleniti totam pariatur laudantium. Corporis
          consequuntur dolorem suscipit est dolore adipisci quos dicta
          praesentium optio, eius quis fuga?
        </p>
      </Container>
    </section>
  );
}
