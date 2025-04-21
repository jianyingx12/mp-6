import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from '../components/Header'

export const metadata: Metadata = {
  title: "OAuth",
  description: "CS391 OAuth",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
