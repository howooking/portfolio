import Navbar from "@/components/Navbar";
import Providers from "@/Context/Providers";
import "./globals.css";

export const metadata = {
  title: "JW's Portfolio",
  description: "Generated with next13 app, created by Howoo",
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
