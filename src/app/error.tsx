"use client";

import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <html>
      <head></head>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => router.push("/")}>홈으로 이동하기</button>
      </body>
    </html>
  );
}
