import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Uncover Carpathian’s Secrets',
  icons: [
    {
      url: '/icons/favicon_l.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon_d.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
