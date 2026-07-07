import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Parisienne,
  La_Belle_Aurore,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

const handwritten = La_Belle_Aurore({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Amor Photo Co.",
  description: "Love, in its truest light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${manrope.variable} ${parisienne.variable} ${handwritten.variable}`}
      >
        {children}
      </body>
    </html>
  );
}