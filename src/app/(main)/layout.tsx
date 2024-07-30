import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/ui";
import '../globals.css'
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily blog",
  description: "Share daily blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={inter.className}>
        <Header/>
        {children}
        <Toaster position="bottom-left"/>
      </body>
    </html>
  );
}
