import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brendon Zimmer",
  description: "Brendon Zimmer is a software engineer in Los Angeles.",
  icons: { icon: "icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable} bg-auto-- font-mono text-auto`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
