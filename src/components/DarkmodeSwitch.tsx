"use client";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkmodeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <div>
        {currentTheme === "dark" ? (
          <BsFillSunFill
            size={40}
            className='cursor-pointer rounded-full bg-slate-400 p-2 text-3xl hover:text-primary'
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            size={40}
            className='cursor-pointer rounded-full bg-slate-100 p-2 text-3xl hover:text-primary'
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    );
  }
  return <></>;
}
