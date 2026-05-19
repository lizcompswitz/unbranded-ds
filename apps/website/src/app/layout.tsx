import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { Work_Sans, Fugaz_One, Lora, Nanum_Brush_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const workSans = Work_Sans({ subsets: ['latin'], variable: '--typography-font-ui' });
const fugazOne = Fugaz_One({ weight: '400', subsets: ['latin'], variable: '--typography-font-display' });
const lora = Lora({ subsets: ['latin'], variable: '--typography-font-body' });
const nanumBrush = Nanum_Brush_Script({ weight: '400', subsets: ['latin'], variable: '--typography-font-brush' });

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
    <html lang="en" data-theme="one-twelve" className={cn(workSans.variable, fugazOne.variable, lora.variable, nanumBrush.variable)}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}