import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: 'Call me jorge',
  description: 'Call me jorge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='font-Tungsten scroll-smooth'>
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              background: '#114550',
              color: '#FFF6D2',
              border: '2px solid #CA8923',
              fontSize: '1rem',
              fontFamily: 'Sintony',
            },
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
