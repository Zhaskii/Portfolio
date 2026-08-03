import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kunal Shrestha — Full-Stack Developer",
    template: "%s — Kunal Shrestha",
  },
  description:
    "Portfolio of Kunal Shrestha, a full-stack developer building scalable web applications with Next.js, React, Node.js, Express, and MongoDB.",
  keywords: [
    "Kunal Shrestha",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "MongoDB developer",
    "portfolio",
  ],
  openGraph: {
    title: "Kunal Shrestha — Full-Stack Developer",
    description:
      "Scalable, responsive web applications built from interface to API.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
