import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Finance Fundamentals | Contractor Finance Institute",
  description:
    "Master the basics of contractor accounting: P&L, balance sheets, job costing, and the metrics that actually matter for construction businesses.",
};

const modules = [
  {
    number: 1,
    title: "Understanding Your Financial Statements",
    duration: "25 min",
    lessons: [
      "The Profit & Loss Statement: What It Actually Tells You",
      "Balance Sheet Basics for Contractors",
      "Cash Flow Statement: The Most Important Report",
      "How These Three Reports Connect",
    ],
  },
  {
    number: 2,
    title: "Job Costing Basics",
    duration: "30 min",
    lessons: [
      "Why Job Costing Matters More Than Overall Profit",
      "Direct Costs vs Indirect Costs",
      "Labor Burden: The Hidden Cost",
      "Tracking Costs by Job in Practice",
    ],
  },
  {
    number: 3,
    title: "Key Metrics for Contractors",
    duration: "20 min",
    lessons: [
      "Gross Margin by Job Type",
      "Days Sales Outstanding (DSO)",
      "Work in Progress (WIP) Tracking",
      "Cash Runway: How Long Can You Survive?",
    ],
  },
  {
    number: 4,
    title: "Pricing for Profit",
    duration: "25 min",
    lessons: [
      "Markup vs Margin: The Critical Difference",
      "Calculating Your Required Markup",
      "Covering Overhead in Every Bid",
      "When to Walk Away from a Job",
    ],
  },
  {
    number: 5,
    title: "Common Financial Mistakes",
    duration: "20 min",
    lessons: [
      "Confusing Profit with Cash",
      "Underpricing Labor",
      "Ignoring Overhead Recovery",
      "Growing Too Fast Without Capital",
    ],
  },
];

export default function ContractorFinanceFundamentalsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="text-[var(--teal)] hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Courses
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
              Beginner
            </span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">5 modules</span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">2 hours</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Contractor Finance Fundamentals
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            Master the basics of contractor accounting: P&L, balance sheets,
            job costing, and the metrics that actually matter for construction
            businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#module-1"
              className="px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all text-center"
            >
              Start Module 1 Free
            </a>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              What You&apos;ll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Read and understand financial statements
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Track costs by job, not just overall
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Calculate true labor burden
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Price jobs to cover overhead and profit
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Monitor key contractor-specific metrics
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Avoid common financial mistakes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-6">
            Course Modules
          </h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.number}
                id={`module-${module.number}`}
                className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center text-sm font-bold">
                        {module.number}
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {module.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)]">
                      {module.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {module.lessons.map((lesson, index) => (
                    <li
                      key={index}
                      className="text-[var(--muted)] text-sm flex items-center gap-2"
                    >
                      <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-xs">
                        {index + 1}
                      </span>
                      {lesson}
                    </li>
                  ))}
                </ul>
                <button className="text-[var(--teal)] text-sm font-medium hover:underline">
                  Start Module →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              After This Course
            </h3>
            <p className="text-[var(--muted)] mb-4">
              Ready to put this into practice? Set up QuickBooks the right way
              with our next course.
            </p>
            <Link
              href="/courses/quickbooks-setup"
              className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              QuickBooks Setup for Contractors →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
