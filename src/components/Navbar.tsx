"use client";

import { NAV_ITEMS } from "@/constants/navItems";
import useProgressbar from "@/hooks/useProgressbar";
import { useEffect, useState } from "react";
import DarkmodeSwitch from "./DarkmodeSwitch";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  //handling mobile drawer
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleDrawer = (): void => {
    setOpenDrawer((prev) => !prev);
    document.body.classList.toggle("drawer-open");
  };

  //handling scroll bar
  const scrollProgress = useProgressbar();
  const [navbarColor, setNavbarColor] = useState<string>("transparent");
  useEffect(() => {
    const changeNavbar = (): void => {
      if (window.scrollY > 50) {
        setNavbarColor("#be8d8a");
      } else {
        setNavbarColor("transparent");
      }
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <header
      className='fixed top-0 z-50 w-full duration-300 ease-in'
      style={{
        backgroundColor: navbarColor,
      }}
    >
      <span
        className='absolute h-1 w-full bg-accent duration-200'
        style={{ transform: `translateX(${scrollProgress - 100}%)` }}
      />
      <div className='mx-auto max-w-6xl select-none px-5 py-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold hover:text-accent '>
            <a href='/#home'>Jungwoo&apos;s Portfolio</a>
          </h1>
          <nav className='hidden items-center gap-5 sm:flex'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.section}
                className='text-lg font-bold hover:text-accent'
              >
                {item.title}
              </a>
            ))}
            <DarkmodeSwitch />
          </nav>

          {/* mobile button */}
          {mounted ? (
            <div className='z-20 flex items-center gap-3 sm:hidden'>
              <DarkmodeSwitch />
              {openDrawer ? (
                <AiOutlineClose
                  size={35}
                  onClick={handleDrawer}
                  className='hover:text-accent'
                />
              ) : (
                <AiOutlineMenu
                  size={35}
                  onClick={handleDrawer}
                  className='hover:text-accent'
                />
              )}
            </div>
          ) : (
            <Image
              alt='loading'
              src='/images/spinner.svg'
              width={20}
              height={20}
            />
          )}

          <div
            className={
              openDrawer
                ? "absolute inset-0 flex h-screen w-full items-center justify-center bg-gray-500/80 text-center duration-300 ease-in sm:hidden"
                : "absolute top-0 bottom-0 left-[100%] right-0 flex h-screen w-full items-center justify-center bg-gray-500/80 text-center duration-300 ease-in sm:hidden"
            }
          >
            <nav className='flex flex-col items-center gap-10 '>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href={item.section}
                  className='text-5xl font-bold hover:text-primary'
                  onClick={handleDrawer}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* progress bar */}
    </header>
  );
}
