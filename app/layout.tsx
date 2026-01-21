import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Jost } from 'next/font/google';


const willow = localFont({
  src: '../public/fonts/Willow.ttf',
  variable: '--font-willow',
})

const jost = Jost({
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap',   // Control font loading behavior
  variable: '--font-jost',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${willow.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
