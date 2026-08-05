import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SiteAnimations from "./components/SiteAnimations";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className={bricolageGrotesque.variable}>
      <body>
        {children}
        <SiteAnimations />
      </body>
    </html>
  );
}
