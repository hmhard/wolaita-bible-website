import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Gupter } from 'next/font/google'
 
const gupter = Gupter({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Geeshsha Maxaafaa",
  description: "Wolaitta Bible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={gupter.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
