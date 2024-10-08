import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/dock/dock";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Becharat",
  description: "Nicolas Becharat Junior Developer | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="z-50 fixed bottom-0 right-0"><Dock /></div>
        
        <div className="min-h-screen max-w-2xl mx-auto py-12 sm:py-24 px-6">
          {children}
        </div>
        <Toaster />

      </body>
    </html>
  );
}
