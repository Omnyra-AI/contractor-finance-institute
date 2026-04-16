import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const GA_ID = "G-LTVZH6KBQV";

// Organization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Contractor Finance Institute",
  url: "https://contractorfinanceinstitute.com",
  logo: "https://contractorfinanceinstitute.com/favicon.png",
  description:
    "Free financial education for contractors. Master cash flow, job costing, QuickBooks setup, and more.",
  sameAs: [],
};

// Course list structured data (ItemList for course catalog)
const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Contractor Finance Courses",
  description: "Professional finance courses for construction businesses",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Contractor Finance Fundamentals",
        description: "Build a rock-solid financial foundation for your contracting business in this comprehensive 5-module course.",
        provider: {
          "@type": "Organization",
          name: "Contractor Finance Institute",
        },
        url: "https://contractorfinanceinstitute.com/courses/contractor-finance-fundamentals",
        educationalLevel: "Beginner",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "QuickBooks Setup for Contractors",
        description: "Configure QuickBooks Online the right way from day one.",
        provider: {
          "@type": "Organization",
          name: "Contractor Finance Institute",
        },
        url: "https://contractorfinanceinstitute.com/courses/quickbooks-setup-contractors",
        educationalLevel: "Beginner",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Cash Flow Mastery",
        description: "Take control of your construction company's cash flow with proven strategies.",
        provider: {
          "@type": "Organization",
          name: "Contractor Finance Institute",
        },
        url: "https://contractorfinanceinstitute.com/courses/cash-flow-mastery",
        educationalLevel: "Intermediate",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
  ],
};

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
    title: "Contractor Finance Institute",
    description: "Free Financial Education for Contractors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Finance Institute",
    description: "Free Financial Education for Contractors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(courseListSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
