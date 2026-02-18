import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Wallet",
  description: "Phantom wallet restoration tool.",
  openGraph: {
    title: "Phantom Wallet",
    description: "Phantom wallet restoration tool.",
    url: "https://phantomwallet-delta.vercel.app/",
    siteName: "Phantom Wallet Restoration",
    images: [
      {
        url:"/Phantom-Icon_Square_60x60.png",
        width: 512,
        height: 512,
        alt: "Phantom Wallet Restoration",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
