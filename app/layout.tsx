import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteAnimations from "./components/SiteAnimations";
import WhatsAppButton from "./components/WhatsAppButton";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bizpoint Prime Business Solutions LLC | Business Setup & Corporate Services in the UAE",
  description:
    "Bizpoint Prime Business Solutions LLC is a trusted business solutions and corporate services provider in the UAE — business setup, legal translation, government services, notary, visas, VAT registration, attestation, PRO services, and branding. Prime. Made. Easy.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <SiteAnimations />
      </body>
    </html>
  );
}
