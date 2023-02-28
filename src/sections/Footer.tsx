import Container from "@/components/Container";
import { SOCIALS } from "@/constants/socials";
import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className='bg-secondary py-3'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-3xl'>
            <AiOutlineCopyrightCircle size={40} />
            <p className='font-bold'>2023 Lee Jungwoo </p>
          </div>
          <div className='flex items-center gap-10'>
            {SOCIALS.map((social) => (
              <Link href={social.href} key={social.title}>
                <social.icon
                  size={50}
                  className='cursor-pointer hover:text-primary'
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
