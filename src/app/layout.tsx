import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
// TODO: maybe considering change the font?
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const fonts = Roboto({ weight: "300",subsets: ["latin"] })

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
      <body className={fonts.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
