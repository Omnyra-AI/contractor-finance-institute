import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-[var(--text)] hover:no-underline"
            >
              Contractor<span className="text-[var(--teal)]">Finance</span>
              <span className="text-[var(--gold)]">Institute</span>
            </Link>
            <p className="mt-4 text-[var(--muted)] text-sm max-w-md">
              Free education for contractors who want to master their finances.
              No fluff, just practical knowledge.
            </p>
            <p className="mt-4 text-[var(--muted)] text-sm">
              Powered by{" "}
              <a
                href="https://omnyra.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                Omnyra
              </a>
            </p>
          </div>

          {/* Free Courses */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">
              Free Courses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/courses/contractor-finance-fundamentals"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Finance Fundamentals
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/quickbooks-setup"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  QuickBooks Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cash-flow-mastery"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Cash Flow Mastery
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://contractorcfo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Free Calculators
                </a>
              </li>
              <li>
                <a
                  href="https://contractorcfo.org/guides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Contractor Guides
                </a>
              </li>
              <li>
                <a
                  href="https://the-owners-playbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Owner&apos;s Playbook Podcast
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">Get Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://command-advisors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  What is a Command Advisor?
                </a>
              </li>
              <li>
                <a
                  href="https://go.omnyra.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Hire a Command Advisor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-[var(--muted)]">
          <p>
            &copy; {new Date().getFullYear()} Contractor Finance Institute. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
