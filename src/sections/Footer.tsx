import Container from "@/components/Container";
import { SOCIALS } from "@/constants/socials";
import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className='bg-primary py-2'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <AiOutlineCopyrightCircle
              size={"3vh"}
              style={{ maxWidth: "30px" }}
            />
            <p className='text-sm font-bold sm:text-3xl'>2023 Lee Jungwoo</p>
          </div>
          <div className='flex items-center gap-5 sm:gap-10'>
            {SOCIALS.map((social) => (
              <a href={social.href} key={social.title} target='_blank'>
                <social.icon
                  size={"5vh"}
                  className='cursor-pointer hover:text-accent'
                  style={{ maxWidth: "30px" }}
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
