"use client";

import { NAV_ITEMS } from "@/constants/constants";
import useProgressbar from "@/hooks/useProgressbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkmodeSwitch from "./DarkmodeSwitch";

export default function Navbar() {
  const progress = useProgressbar();
  const [navbar, setNavbar] = useState({
    backgroundColor: "transparent",
  });

  useEffect(() => {
    const changeNavbar = (): void => {
      if (window.scrollY > 90) {
        setNavbar({
          backgroundColor: "white",
        });
      } else {
        setNavbar({
          backgroundColor: "transparent",
        });
      }
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <header
      className='fixed z-20 w-full duration-300 ease-in'
      style={{
        backgroundColor: navbar.backgroundColor,
      }}
    >
      <div className='mx-auto max-w-6xl p-5'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold hover:text-primary'>
            <Link href='/'>호우&apos;s Portfolio</Link>
          </h1>
          <nav className='flex items-center gap-5'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className='text-xl font-bold hover:text-primary'
              >
                {item.title}
              </Link>
            ))}
            <DarkmodeSwitch />
          </nav>
        </div>
      </div>
      <span
        className='absolute h-1 w-full bg-primary duration-200'
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </header>
  );
}
