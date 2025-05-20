import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heretto",
  description: "CMS web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>
        <div className=" min-h-[2100px]">
          <nav className="main-container-width ">
            <Navbar />
          </nav>
          <div className="main-container-width mt-[90px] border-t-1 ">
            {children}
          </div>

          <footer className="main-container-width">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
