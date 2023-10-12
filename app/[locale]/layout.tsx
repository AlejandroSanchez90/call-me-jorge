import Navbar from '@/components/Navbar/Navbar';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
export const metadata: Metadata = {
  title: 'Call me jorge',
  description: 'Call me jorge',
};
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}
import type { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='font-Tungsten scroll-smooth'>
        <NextIntlClientProvider locale={locale} messages={messages}>
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
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
