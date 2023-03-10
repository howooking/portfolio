"use client";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkmodeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          size={40}
          className='cursor-pointer rounded-full bg-slate-300 p-2 text-3xl hover:text-accent'
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          size={40}
          className='cursor-pointer rounded-full bg-slate-300 p-2 text-3xl hover:text-accent'
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
