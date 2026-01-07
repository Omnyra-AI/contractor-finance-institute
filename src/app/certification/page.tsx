import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification | Contractor Finance Institute",
  description:
    "Coming soon: Certified Command Advisor program. Get notified when enrollment opens.",
};

export default function CertificationPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-sm font-medium mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Certified Command Advisor
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            A professional certification for financial advisors who specialize
            in serving contractors and service businesses.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[var(--panel)]/50 border border-white/5">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
              What the Program Will Include
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Comprehensive Training
                  </h3>
                  <p className="text-[var(--muted)]">
                    Deep dive into contractor-specific financial management,
                    QuickBooks mastery, and advisory best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Omnyra Platform Certification
                  </h3>
                  <p className="text-[var(--muted)]">
                    Learn to use the Omnyra financial intelligence platform to
                    serve clients with real-time insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Client Matching
                  </h3>
                  <p className="text-[var(--muted)]">
                    Certified advisors may be matched with Omnyra clients
                    looking for advisory services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20 text-center">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              In the Meantime
            </h3>
            <p className="text-[var(--muted)] mb-4">
              Start learning with our free courses while the certification
              program is in development.
            </p>
            <Link
              href="/courses"
              className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
