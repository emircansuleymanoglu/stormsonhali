import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Logistiek in Nederland`,
    template: `%s | ${site.name}`,
  },
  description:
    "Modern transport, opslag, distributie en supply chain ondersteuning in Nederland en de Benelux.",
  keywords: [
    "logistiek Nederland",
    "transportbedrijf Nederland",
    "opslag",
    "Benelux distributie",
    "offerte logistiek",
  ],
  openGraph: {
    title: `${site.name} | Logistiek in Nederland`,
    description:
      "Betrouwbaar transport, opslag en distributie voor supply chains die moeten blijven bewegen.",
    url: site.url,
    siteName: site.name,
    locale: "nl_NL",
    type: "website",
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
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
