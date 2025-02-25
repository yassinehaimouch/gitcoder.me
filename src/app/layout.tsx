import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yassine Haimouch | Software Engineer",
  description:
    "I am a software engineer specialized in web development, crafting modern digital solutions and user-centered experiences.",
  openGraph: {
    title: "Yassine Haimouch | Software Engineer",
    description:
      "Software engineer specialized in web development, content creator, and public speaker.",
    url: "https://gitcoder.me",
    siteName: "Yassine Haimouch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Haimouch | Software Engineer",
    description:
      "Software engineer specialized in web development, content creator, and public speaker.",
    creator: "@thegitcoder",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
