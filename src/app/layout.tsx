import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PR KMIT",
  description: "Design and Developed By PR KMIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
         <link rel="icon" href="/PRlogo.png" type="image/x-icon" />
       </head>
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
