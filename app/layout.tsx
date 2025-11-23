import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Docverter - Konversi Dokumen Dalam Hitungan Detik",
  description:
    "Konversi berbagai format dokumen dengan mudah, cepat, dan aman. Mendukung PDF, Word, Excel, PowerPoint, dan banyak lagi.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
