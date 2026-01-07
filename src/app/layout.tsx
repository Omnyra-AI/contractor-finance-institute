import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contractor Finance Institute | Free Financial Education for Contractors",
  description:
    "Master contractor finance with free courses on cash flow, job costing, QuickBooks setup, and more. Practical education built for construction professionals.",
  keywords: [
    "contractor finance course",
    "construction accounting training",
    "quickbooks for contractors",
    "cash flow management course",
    "contractor education",
  ],
  metadataBase: new URL("https://contractorfinanceinstitute.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Contractor Finance Institute",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
