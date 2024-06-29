import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Koulen } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan Jonathan",
  description: "Bryan's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
