import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altered — D-IT Solutions | Web Developer & AI Collaborator",
  description: "Web developer based in Enugu, Nigeria. I build custom websites powered by AI — faster, smarter, and built to grow your business.",
  openGraph: {
    title: "Altered — D-IT Solutions",
    description: "I don't just build sites. I build growth.",
    url: "https://altered.dev",
    siteName: "Altered — D-IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altered — D-IT Solutions",
    description: "I don't just build sites. I build growth.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
