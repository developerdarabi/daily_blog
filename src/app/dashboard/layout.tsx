import { DashboardDesktopHeader } from "@/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import '../globals.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily blog",
  description: "Share daily blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(cookies().get('refreshToken'));
  const refreshToken = cookies().get('refreshToken')

  if (!refreshToken) {
    redirect('/login')
  }

  return (
    <html lang="en" className="h-screen">
      <body className={` bg-gray-300`}>
        <DashboardDesktopHeader />
        <main className="bg-white m-4 rounded-md p-4">
          {children}
        </main>
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
