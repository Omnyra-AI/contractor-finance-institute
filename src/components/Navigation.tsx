"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/courses", label: "Free Courses" },
  { href: "/resources", label: "Resources" },
  { href: "/certification", label: "Certification" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[var(--text)] hover:no-underline"
          >
            Contractor<span className="text-[var(--teal)]">Finance</span>
            <span className="text-[var(--gold)]">Institute</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors hover:no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/courses"
              className="px-4 py-2 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-lg border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Start Learning Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--muted)]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--muted)] hover:text-[var(--text)] hover:no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/courses"
                className="mt-2 px-4 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-lg border border-[var(--teal)] text-center hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Start Learning Free
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
