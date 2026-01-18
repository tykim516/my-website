import type { Metadata } from "next";


import "./globals.css";

import localFont from 'next/font/local'

const willow = localFont({
  src: '../public/fonts/Willow.ttf',
  variable: '--font-willow',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={willow.variable}>
        {children}
      </body>
    </html>
  );
}
