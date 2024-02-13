import React from 'react';
import type { Metadata } from "next";
import Header from "./components/header"; 
import Footer from "./components/footer";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naim C | Portfolio",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Header />
        {children}
        <div className="w-[100%] h-px border border-gray-400"></div>
        <Footer />
      </body>
    </html>
  );
}
