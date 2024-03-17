import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import fonts from "./fonts";



export const metadata: Metadata = {
  title: "Bolsonext",
  description: "Compra bolsones a precio record",
  keywords: "bolson, bolsones, tienda, online, baratos, bolsonext"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.sarala.className}>
        <Navbar />
        <div className={"pt-12"}>
          {children}
        </div>
      </body>
    </html >
  );
}
