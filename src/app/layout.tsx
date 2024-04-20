import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer autoClose={2500} />
      </body>
    </html>
  );
}
