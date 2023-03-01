import Navbar from "@/components/Navbar";
import Providers from "@/Context/Providers";
import "./globals.css";

export const metadata = {
  title: "호트폴리우",
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
