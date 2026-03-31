import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Cambiamos Geist por Inter
import "./globals.css";
import Header from "./components/Header";

// Configuramos Inter para que sea la fuente sans-serif global
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white font-[family-name:var(--font-inter)]">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}