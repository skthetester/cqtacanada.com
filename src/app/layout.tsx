import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300','400','500','600','700'],
});

const jetMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ['400','700'],
});

export const metadata: Metadata = {
  title: "CQTA Canada - Software Quality Engineering Community",
  description: "Advancing software quality engineering and supporting testing professionals in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
