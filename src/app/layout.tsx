import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";

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
      className={`${GeistSans.variable} ${GeistMono.variable} snap-y snap-mandatory scroll-smooth bg-auto-- font-mono text-auto`}
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
