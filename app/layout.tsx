import type { Metadata } from "next";
import { Sarala } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const sarala = Sarala({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Bolsonext",
  description: "Compra bolsones a precio record!",
  keywords: "bolson, bolsones, tienda, online, baratos, bolsonext"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sarala.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
