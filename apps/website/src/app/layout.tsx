import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { Work_Sans, Fugaz_One, Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-ui' });
const fugazOne = Fugaz_One({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const lora = Lora({ subsets: ['latin'], variable: '--font-body' });

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
    <html lang="en" data-theme="one-twelve" className={cn(workSans.variable, fugazOne.variable, lora.variable)}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}