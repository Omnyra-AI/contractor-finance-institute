import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Courses | Contractor Finance Institute",
  description:
    "Free courses on contractor finance, QuickBooks setup, and cash flow management. Built for construction professionals.",
};

const courses = [
  {
    title: "Contractor Finance Fundamentals",
    description:
      "Master the basics of contractor accounting: P&L, balance sheets, job costing, and the metrics that actually matter for construction businesses.",
    modules: [
      "Understanding Your Financial Statements",
      "Job Costing Basics",
      "Key Metrics for Contractors",
      "Pricing for Profit",
      "Common Financial Mistakes",
    ],
    duration: "2 hours",
    href: "/courses/contractor-finance-fundamentals",
    level: "Beginner",
    color: "teal",
  },
  {
    title: "QuickBooks Setup for Contractors",
    description:
      "Configure QuickBooks Online the right way from day one. Chart of accounts, job costing, class tracking, and reports that actually help you run your business.",
    modules: [
      "Chart of Accounts for Contractors",
      "Setting Up Job Costing & Classes",
      "Essential Reports & Dashboards",
    ],
    duration: "1.5 hours",
    href: "/courses/quickbooks-setup",
    level: "Beginner",
    color: "gold",
  },
  {
    title: "Cash Flow Mastery",
    description:
      "Stop living paycheck to paycheck. Learn to forecast cash flow, manage receivables, time your payables, and never miss payroll again.",
    modules: [
      "Understanding Cash Flow vs Profit",
      "Building a 13-Week Cash Forecast",
      "Managing Receivables Aggressively",
      "Strategic Payables Management",
    ],
    duration: "2 hours",
    href: "/courses/cash-flow-mastery",
    level: "Intermediate",
    color: "violet",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Free Courses
          </h1>
          <p className="text-xl text-[var(--muted)] mb-4">
            Practical financial education built specifically for contractors.
            No fluff, no upsells—just the knowledge you need to run a profitable
            business.
          </p>
          <p className="text-[var(--muted)]">
            Each course includes video lessons, downloadable templates, and
            real-world examples from construction businesses.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {courses.map((course) => (
              <div
                key={course.href}
                className="p-6 md:p-8 rounded-2xl bg-[var(--panel)]/50 border border-white/5"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-medium uppercase tracking-wider ${
                          course.color === "teal"
                            ? "text-[var(--teal)]"
                            : course.color === "gold"
                              ? "text-[var(--gold)]"
                              : "text-[var(--violet-start)]"
                        }`}
                      >
                        {course.level}
                      </span>
                      <span className="text-xs text-[var(--muted)]">•</span>
                      <span className="text-xs text-[var(--muted)]">
                        {course.modules.length} modules
                      </span>
                      <span className="text-xs text-[var(--muted)]">•</span>
                      <span className="text-xs text-[var(--muted)]">
                        {course.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">
                      {course.title}
                    </h2>
                    <p className="text-[var(--muted)] mb-4">
                      {course.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-[var(--text)] mb-2">
                        What you&apos;ll learn:
                      </h4>
                      <ul className="space-y-1">
                        {course.modules.map((module, index) => (
                          <li
                            key={index}
                            className="text-sm text-[var(--muted)] flex items-center gap-2"
                          >
                            <span className="text-[var(--teal)]">✓</span>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={course.href}
                      className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
                    >
                      Start Course Free →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20 text-center">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              Want Hands-On Help?
            </h3>
            <p className="text-[var(--muted)] mb-4">
              A Command Advisor can implement everything you learn in these
              courses—and monitor your finances 24/7.
            </p>
            <a
              href="https://go.omnyra.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Hire a Command Advisor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
