"use client";

import { NAV_ITEMS } from "@/constants/navItems";
import useProgressbar from "@/hooks/useProgressbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkmodeSwitch from "./DarkmodeSwitch";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
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
      if (window.scrollY > 90) {
        setNavbarColor("#A2798F");
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
      <div className='mx-auto max-w-6xl select-none p-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold hover:text-primary '>
            <a href='/#home'>Hortfoliwoo</a>
          </h1>
          <nav className='hidden items-center gap-5 sm:flex'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.section}
                className='text-xl font-bold hover:text-primary'
              >
                {item.title}
              </a>
            ))}
            <DarkmodeSwitch />
          </nav>

          {/* mobile button */}
          <div className='z-20 flex items-center gap-3 sm:hidden'>
            <DarkmodeSwitch />
            {openDrawer ? (
              <AiOutlineClose
                size={35}
                onClick={handleDrawer}
                className='hover:text-primary'
              />
            ) : (
              <AiOutlineMenu
                size={35}
                onClick={handleDrawer}
                className='hover:text-primary'
              />
            )}
          </div>
          <div
            className={
              openDrawer
                ? "absolute inset-0 flex h-screen w-full items-center justify-center bg-gray-500/80 text-center duration-300 ease-in sm:hidden"
                : "absolute top-0 bottom-0 left-[100%] right-0 flex h-screen w-full items-center justify-center bg-gray-500/80 text-center duration-300 ease-in sm:hidden"
            }
          >
            <nav className='flex flex-col items-center gap-10'>
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
      <span
        className='absolute h-1 w-full bg-primary duration-200'
        style={{ transform: `translateX(${scrollProgress - 100}%)` }}
      />
    </header>
  );
}
