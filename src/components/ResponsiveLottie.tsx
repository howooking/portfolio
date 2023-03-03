import { useEffect, useState } from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import lottieJson from "../.././public/images/developer.json";

export default function ResponsiveLottie() {
  const [width, setWidth] = useState(globalThis.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(globalThis.innerWidth);
    globalThis.addEventListener("resize", handleResize);
    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{
          width: `${width < 640 ? "250px" : "100%"}`,
          margin: "auto",
        }}
      />
    </div>
  );
}
