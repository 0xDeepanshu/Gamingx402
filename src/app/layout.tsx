import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gx402 — The Gaming SDK for x402",
  description:
    "Gx402 brings the power of x402 to games — enabling seamless payments, cross-platform sync, and secure player interactions across Unity, Unreal, Web, and Mobile.",
  keywords: [
    "Gx402",
    "x402",
    "game SDK",
    "Unity SDK",
    "Unreal Engine SDK",
    "Web3 gaming",
    "in-game payments",
    "cross-platform sync",
    "Base network",
    "Farcaster",
    "Solana",
  ],
  // authors: [{ name: "Gx402 Labs", url: "https://gx402.com" }],
  openGraph: {
    title: "Gx402 — The Gaming SDK for x402",
    description:
      "Integrate x402 functionality directly into your games with Gx402. Built for Unity, Unreal, Web, Mobile, Telegram, and Farcaster.",
    // url: "https://gx402.com",
    siteName: "Gx402",
    images: [
      {
        url: "/favicon/favicon-32x32.png", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Gx402 SDK Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gx402 — The Gaming SDK for x402",
    description:
      "Build x402-powered games with seamless payments and real-time sync — for Unity, Unreal, and beyond.",
    images: ["/favicon/og-image.png"],
    // creator: "@Gx402", // update if you have an official handle
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
  // metadataBase: new URL("https://gx402.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
