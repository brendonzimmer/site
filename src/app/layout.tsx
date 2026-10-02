import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";

// Keep the same font without a high-priority preload competing with Mono.
const GeistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brendon.app"),
  title: {
    default: "Brendon Zimmer — Software Engineer",
    template: "%s · Brendon Zimmer",
  },
  description:
    "Brendon Zimmer is a software engineer at Bloomberg in New York and a USC computer science graduate. Projects, experience, and a few favorite things.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth bg-paper font-mono text-auto`}
      lang="en"
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
