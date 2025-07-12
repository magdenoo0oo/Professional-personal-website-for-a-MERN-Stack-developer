import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: 'يوسف الدسوقي - MERN Stack Developer',
  description: 'موقع شخصي لمطور MERN Stack محترف - MongoDB, Express.js, React.js, Node.js',
  keywords: 'MERN Stack, React, Node.js, MongoDB, Express.js, مطور, برمجة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${cairo.variable} font-cairo antialiased`}>
        {children}
      </body>
    </html>
  );
}