import Navbar from "@/components/Navbar";
import DarkmodeProvider from "@/Context/DarkmodeProvider";
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
        <DarkmodeProvider>
          <Navbar />
          {children}
        </DarkmodeProvider>
      </body>
    </html>
  );
}
