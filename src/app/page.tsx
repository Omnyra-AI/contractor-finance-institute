import Link from "next/link";

const courses = [
  {
    title: "Contractor Finance Fundamentals",
    description:
      "Master the basics of contractor accounting: P&L, balance sheets, job costing, and the metrics that actually matter for construction businesses.",
    modules: 5,
    duration: "2 hours",
    href: "/courses/contractor-finance-fundamentals",
    level: "Beginner",
    color: "teal",
  },
  {
    title: "QuickBooks Setup for Contractors",
    description:
      "Configure QuickBooks Online the right way from day one. Chart of accounts, job costing, class tracking, and reports that actually help you run your business.",
    modules: 3,
    duration: "1.5 hours",
    href: "/courses/quickbooks-setup",
    level: "Beginner",
    color: "gold",
  },
  {
    title: "Cash Flow Mastery",
    description:
      "Stop living paycheck to paycheck. Learn to forecast cash flow, manage receivables, time your payables, and never miss payroll again.",
    modules: 4,
    duration: "2 hours",
    href: "/courses/cash-flow-mastery",
    level: "Intermediate",
    color: "violet",
  },
];

const stats = [
  { value: "82%", label: "of contractor failures are cash flow problems" },
  { value: "$0", label: "cost for all courses" },
  { value: "5.5", label: "hours of practical content" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-sm font-medium mb-6">
              100% Free Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 leading-tight">
              Master Contractor Finance.{" "}
              <span className="text-[var(--teal)]">For Free.</span>
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Practical courses on cash flow, job costing, and accounting—built
              specifically for contractors and construction business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="px-8 py-4 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all text-lg"
              >
                Browse Free Courses
              </Link>
              <a
                href="https://go.omnyra.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--panel)] text-[var(--text)] font-semibold rounded-xl border border-white/10 hover:no-underline hover:border-white/20 transition-all text-lg"
              >
                Get a Command Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-[var(--teal)] mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--muted)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Free Courses
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              No credit card. No catch. Just practical education to help you run
              a more profitable contracting business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group block p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline"
              >
                <div className="flex items-center gap-2 mb-4">
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
                    {course.modules} modules
                  </span>
                  <span className="text-xs text-[var(--muted)]">•</span>
                  <span className="text-xs text-[var(--muted)]">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3 group-hover:text-[var(--teal)] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center text-[var(--teal)] text-sm font-medium">
                  Start Course Free
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="py-20 bg-[var(--panel)]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Why Is This Free?
            </h2>
          </div>
          <div className="prose prose-invert max-w-none text-center">
            <p className="text-lg text-[var(--muted)] mb-6">
              The Contractor Finance Institute is powered by{" "}
              <a
                href="https://omnyra.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Omnyra
              </a>
              , a financial intelligence platform for service businesses.
            </p>
            <p className="text-lg text-[var(--muted)] mb-6">
              We believe every contractor deserves access to quality financial
              education—whether you become a client or not. These courses teach
              the same principles our Command Advisors use with their clients.
            </p>
            <p className="text-lg text-[var(--muted)]">
              If you want hands-on help implementing what you learn, you can
              always{" "}
              <a
                href="https://go.omnyra.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                hire a Command Advisor
              </a>
              . But the education? That&apos;s on us.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-8 text-center">
            More Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://contractorcfo.org/tools"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                Free Calculators
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Job costing, markup vs margin, and more interactive tools.
              </p>
            </a>
            <a
              href="https://contractorcfo.org/guides"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                Contractor Guides
              </h3>
              <p className="text-[var(--muted)] text-sm">
                In-depth guides on cash flow, taxes, and job costing.
              </p>
            </a>
            <a
              href="https://command-advisors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                What is a Command Advisor?
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Learn about the modern alternative to fractional CFOs.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-xl mx-auto">
              Start with our free courses, or skip ahead and get a Command
              Advisor to implement everything for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses/contractor-finance-fundamentals"
                className="px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
              >
                Start Free Course
              </Link>
              <a
                href="https://go.omnyra.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--panel)] text-[var(--text)] font-semibold rounded-xl border border-white/10 hover:no-underline hover:border-white/20 transition-all"
              >
                Hire a Command Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
