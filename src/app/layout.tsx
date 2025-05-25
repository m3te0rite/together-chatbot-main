import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from './dynamic-components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Study Genius",
  description: "A Chatbot to answer all your study related queries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <header className="text-lg font-medium">
          <div className="mx-auto flex max-w-6xl gap-4 px-4 py-4 justify-center">
            <a href="/" className="flex gap-2 text-gray-500 hover:text-gray-900">
              Study-Genius
            </a>
          </div>
        </header>

        <main className="flex grow flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
