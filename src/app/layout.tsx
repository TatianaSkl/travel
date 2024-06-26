import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://travel-rosy-one.vercel.app/'),
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
  openGraph: {
    type: 'website',
    url: 'https://travel-rosy-one.vercel.app/',
    title: 'CarpTravel',
    description: 'Uncover Carpathian’s Secrets',
    siteName: 'CarpTravel',
    images: [{ url: '/images/og_image.jpg' }, { url: '/images/og_image.png' }],
  },
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
