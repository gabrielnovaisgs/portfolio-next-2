import type { Metadata } from "next";
import localFont from "next/font/local";
import { Urbanist } from 'next/font/google'
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



const titleFont = Urbanist({
  subsets: ['latin'],
  variable: '--title-font'
})
const normalFont = localFont({
  variable: '--normal-font',
  src: [
    {
      path: "./fonts/lufga/LufgaLight.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/lufga/LufgaRegular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/lufga/LufgaMedium.ttf",
      style: "normal",
      weight: "500",
    }
  ]
})


export const metadata: Metadata = {
  title: "Gabriel Novais",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${titleFont.variable} ${normalFont.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
