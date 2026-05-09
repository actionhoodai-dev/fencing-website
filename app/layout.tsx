import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thirupathai Iron Wire Fencing | திருப்பதி இரும்பு கம்பி வேலி உற்பத்தியகம்",
    template: "%s | Thirupathai Fencing",
  },
  description:
    "Tamil Nadu's most trusted premium iron wire fencing manufacturer. Specializing in wire mesh, barbed wire, chain link fencing, gates, and industrial security solutions since 1998.",
  keywords: [
    "iron wire fencing",
    "fencing manufacturer Tamil Nadu",
    "barbed wire fencing",
    "chain link fencing",
    "wire mesh fencing",
    "iron gates",
    "industrial fencing",
    "Salem fencing manufacturer",
    "திருப்பதி இரும்பு கம்பி வேலி",
  ],
  authors: [{ name: "Thirupathai Iron Wire Fencing Manufacturer" }],
  creator: "Thirupathai Iron Wire Fencing Manufacturer",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thirupathaifencing.com",
    siteName: "Thirupathai Iron Wire Fencing",
    title: "Thirupathai Iron Wire Fencing | Premium Industrial Fencing",
    description:
      "Tamil Nadu's most trusted premium iron wire fencing manufacturer since 1998.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thirupathai Iron Wire Fencing",
    description: "Premium industrial fencing solutions across Tamil Nadu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
