import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from './dynamic-components/Footer';
import Header from './dynamic-components/Header';


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
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}>

        <Header/>
        <main className="flex grow flex-col">{children}</main>
        <br></br>

        <Footer/>
      </body>
    </html>
  );
}
