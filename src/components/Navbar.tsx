"use client";

import { NAV_ITEMS } from "@/constants/navItems";
import useProgressbar from "@/hooks/useProgressbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkmodeSwitch from "./DarkmodeSwitch";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  //handling mobile modal
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen((prev) => !prev);
    document.body.classList.toggle("modal-open");
  };

  //handling scroll bar
  const progress = useProgressbar();
  const [navbar, setNavbar] = useState({
    backgroundColor: "transparent",
  });
  useEffect(() => {
    const changeNavbar = (): void => {
      if (window.scrollY > 90) {
        setNavbar({
          backgroundColor: "#A2798F",
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
      className='fixed z-30 w-full duration-300 ease-in'
      style={{
        backgroundColor: navbar.backgroundColor,
      }}
    >
      <div className='mx-auto max-w-6xl select-none p-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold hover:text-primary '>
            <Link href='/'>호우&apos;s Portfolio</Link>
          </h1>
          <nav className='hidden items-center gap-5 sm:flex'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.section}
                className='text-xl font-bold hover:text-primary'
              >
                {item.title}
              </Link>
            ))}
            <DarkmodeSwitch />
          </nav>

          {/* mobile button */}
          <div className='z-20 flex items-center gap-3 sm:hidden'>
            <DarkmodeSwitch />
            {open ? (
              <AiOutlineClose size={35} onClick={handleOpen} />
            ) : (
              <AiOutlineMenu size={35} onClick={handleOpen} />
            )}
          </div>
          <div
            className={
              open
                ? "absolute inset-0 flex h-screen w-full items-center justify-center bg-gray-500/80 text-center duration-300 ease-in sm:hidden"
                : "absolute top-0 bottom-0 left-[100%] right-0 flex h-screen w-full items-center justify-center bg-gray-500/80 text-center duration-300 ease-in sm:hidden"
            }
          >
            <nav className='flex flex-col items-center gap-10'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.title}
                  href={item.section}
                  className='text-5xl font-bold hover:text-primary'
                  onClick={handleOpen}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* progress bar */}
      <span
        className='absolute h-1 w-full bg-primary duration-200'
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </header>
  );
}
