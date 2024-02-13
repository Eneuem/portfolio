import React from 'react';
import type { Metadata } from "next";
import Header from "./components/header"; 
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
      </body>
    </html>
  );
}
