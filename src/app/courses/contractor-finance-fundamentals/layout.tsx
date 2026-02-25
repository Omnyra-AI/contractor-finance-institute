import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Finance Fundamentals | Contractor Finance Institute",
  description:
    "Build a rock-solid financial foundation for your contracting business. Free 5-module course covering cash flow, job costing, financial statements, and more.",
  keywords: [
    "contractor finance course",
    "construction accounting basics",
    "contractor financial fundamentals",
    "free contractor course",
  ],
};

export default function ContractorFinanceFundamentalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
