//server

import Navbar from "@/components/Navbar";
import Providers from "@/Context/Providers";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JW's Portfolio",
  description: "Portfolio website created by NexyJS",
  category: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
