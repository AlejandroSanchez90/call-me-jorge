import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Call me jorge',
  description: 'Call me jorge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-Tungsten scroll-smooth'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
