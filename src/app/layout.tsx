import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "../components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

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
      <body className={`antialiased max-w-3xl mt-32 mb-10 mx-auto px-5`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
