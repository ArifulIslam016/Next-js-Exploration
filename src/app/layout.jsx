import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Title from "@/Components/Title";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Story",
  description: "Exploroing Next js core concept",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
      <header className="p-4 border-b-2 border-gray-700">
        <h1>Dev Story</h1>
      </header>
          <main className="py-5 ">
                  {children}

        </main>
      </body>
    </html>
  );
}
