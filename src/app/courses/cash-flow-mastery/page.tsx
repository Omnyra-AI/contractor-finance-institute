import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Flow Mastery | Contractor Finance Institute",
  description:
    "Stop living paycheck to paycheck. Learn to forecast cash flow, manage receivables, time your payables, and never miss payroll again.",
};

const modules = [
  {
    number: 1,
    title: "Understanding Cash Flow vs Profit",
    duration: "25 min",
    lessons: [
      "Why Profitable Companies Go Broke",
      "The Timing Problem in Construction",
      "Retainage: The Cash Flow Killer",
      "Reading a Cash Flow Statement",
    ],
  },
  {
    number: 2,
    title: "Building a 13-Week Cash Forecast",
    duration: "35 min",
    lessons: [
      "Why 13 Weeks? The Planning Horizon",
      "Mapping Expected Inflows",
      "Mapping Required Outflows",
      "Identifying the Danger Zones",
      "Updating Your Forecast Weekly",
    ],
  },
  {
    number: 3,
    title: "Managing Receivables Aggressively",
    duration: "30 min",
    lessons: [
      "The Cost of Slow Collections",
      "Invoice Timing: Don't Wait Until Month End",
      "The Day-31 Follow-Up Protocol",
      "When to Use Mechanics Liens",
      "Firing Bad-Paying Customers",
    ],
  },
  {
    number: 4,
    title: "Strategic Payables Management",
    duration: "30 min",
    lessons: [
      "Matching Payables to Receivables",
      "Negotiating Better Terms with Suppliers",
      "Which Bills to Prioritize",
      "Building Cash Reserves",
      "Lines of Credit: When and How to Use Them",
    ],
  },
];

export default function CashFlowMasteryPage() {
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
            <span className="text-xs text-[var(--violet-start)] font-medium uppercase tracking-wider">
              Intermediate
            </span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">4 modules</span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">2 hours</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Cash Flow Mastery
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            Stop living paycheck to paycheck. Learn to forecast cash flow,
            manage receivables, time your payables, and never miss payroll
            again.
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

      {/* Key Stat */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 mb-8">
            <p className="text-2xl font-bold text-[var(--text)] mb-2">
              82% of construction business failures
            </p>
            <p className="text-[var(--muted)]">
              are due to cash flow problems—not lack of work, not bad
              workmanship. This course teaches you how to avoid becoming a
              statistic.
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
                  Build and maintain a 13-week cash forecast
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Collect receivables faster
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Time your payables strategically
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Build cash reserves for slow periods
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Use credit lines effectively
                </li>
                <li className="text-[var(--muted)] flex items-start gap-2">
                  <span className="text-[var(--teal)] mt-1">✓</span>
                  Never miss payroll again
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
                      <span className="w-8 h-8 rounded-full bg-[var(--violet-start)]/20 text-[var(--violet-start)] flex items-center justify-center text-sm font-bold">
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
              Want This Done For You?
            </h3>
            <p className="text-[var(--muted)] mb-4">
              A Command Advisor builds your cash forecast, monitors your
              receivables, and alerts you before problems happen—automatically.
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
