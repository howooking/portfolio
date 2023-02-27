import { useState, useEffect } from "react";

export default function useProgressbar(): number {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = (): void => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener("scroll", updateProgress);
  }, []);

  return progress;
}
