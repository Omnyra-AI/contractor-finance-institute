import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickBooks Setup for Contractors | Contractor Finance Institute",
  description:
    "Configure QuickBooks Online the right way from day one. Chart of accounts, job costing, class tracking, and reports that help you run your business.",
};

const modules = [
  {
    number: 1,
    title: "Chart of Accounts for Contractors",
    duration: "30 min",
    lessons: [
      "Why the Default Chart of Accounts Doesn't Work",
      "Income Accounts: Breaking Down Revenue by Type",
      "Cost of Goods Sold: Labor, Materials, Subs, Equipment",
      "Overhead Accounts: What Goes Where",
      "The Contractor-Specific Account List",
    ],
  },
  {
    number: 2,
    title: "Setting Up Job Costing & Classes",
    duration: "35 min",
    lessons: [
      "Projects vs Classes: When to Use Each",
      "Creating a Job/Project Hierarchy",
      "Linking Expenses to Jobs",
      "Tracking Labor Hours and Costs",
      "Sub-customer Setup for Commercial Work",
    ],
  },
  {
    number: 3,
    title: "Essential Reports & Dashboards",
    duration: "25 min",
    lessons: [
      "Profit & Loss by Job: The Most Important Report",
      "Open Invoices Aging: Know Who Owes You",
      "Accounts Payable Aging: Know What You Owe",
      "Custom Reports for Contractors",
      "Setting Up a Weekly Financial Review",
    ],
  },
];

export default function QuickBooksSetupPage() {
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
            <span className="text-xs text-[var(--gold)] font-medium uppercase tracking-wider">
              Beginner
            </span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">3 modules</span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">1.5 hours</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-6">
            QuickBooks Setup for Contractors
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            Configure QuickBooks Online the right way from day one. Chart of
            accounts, job costing, class tracking, and reports that actually
            help you run your business.
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

      {/* Prerequisites */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-8">
            <h2 className="text-lg font-semibold text-[var(--text)] mb-2">
              Prerequisites
            </h2>
            <p className="text-[var(--muted)] mb-3">
              This course assumes you have a QuickBooks Online account (Simple
              Start, Essentials, Plus, or Advanced).
            </p>
            <p className="text-[var(--muted)]">
              New to contractor finance?{" "}
              <Link href="/courses/contractor-finance-fundamentals">
                Start with Finance Fundamentals
              </Link>{" "}
              first.
            </p>
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
                  Set up a contractor-specific chart of accounts
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Configure job costing and class tracking
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Link every expense to the right job
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Generate P&L by job reports
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Track AR/AP aging properly
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Build a weekly financial review habit
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
                      <span className="w-8 h-8 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center text-sm font-bold">
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
              Now that your books are set up right, learn to manage your cash
              flow like a pro.
            </p>
            <Link
              href="/courses/cash-flow-mastery"
              className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Cash Flow Mastery →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
