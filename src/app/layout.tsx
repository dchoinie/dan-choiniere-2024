import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import MainNavigation from "./_components/MainNavigation";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Dan Choiniere | Frontend Developer",
  description: "Portfolio website for Dan Choiniere",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
