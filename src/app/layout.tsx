import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brendon Zimmer",
  description: "Brendon Zimmer is a software engineer in Los Angeles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
