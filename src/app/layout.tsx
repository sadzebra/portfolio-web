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
  title: "Brian Hodge | Senior Full-Stack Engineer & Product Architect",
  description: "Senior Full-Stack Engineer with 15+ years experience building high-performance digital ecosystems, headless e-commerce, and scalable technical architectures.",

  openGraph: {
    title: "Brian Hodge | Senior Full-Stack Portfolio",
    description: "Building products from concept to scale. Explore a decade of high-performance technical solutions.",
    url: "#", // TODO: Add full URL for portfolio here
    siteName: "Brian Hodge Portfolio",
    images: [
      {
        url: "#", // Full URL to your image
        width: 1200,
        height: 630,
        alt: "Brian Hodge Portfolio Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brian Hodge | Senior Full-Stack Engineer",
    description: "15+ years of building scalable products and custom technical architecture.",
    images: ["#"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
