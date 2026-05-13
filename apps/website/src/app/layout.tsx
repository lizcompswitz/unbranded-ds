import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'One Twelve — Track & Field Tools, Journals & Coaching',
  description:
    'Building tools, products, and experiences for track & field athletes, coaches, and communities.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={cn("font-sans", geist.variable)}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}