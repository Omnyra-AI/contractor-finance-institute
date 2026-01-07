import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Contractor Finance Institute",
  description:
    "Free resources for contractors: calculators, guides, templates, and more.",
};

const resources = [
  {
    title: "Free Calculators",
    description:
      "Job costing calculator, markup vs margin converter, and more interactive tools.",
    href: "https://contractorcfo.org/tools",
    external: true,
  },
  {
    title: "Contractor Guides",
    description:
      "In-depth guides on cash flow management, job costing basics, and contractor taxes.",
    href: "https://contractorcfo.org/guides",
    external: true,
  },
  {
    title: "The Owner's Playbook Podcast",
    description:
      "Real conversations with business owners about what actually works.",
    href: "https://the-owners-playbook.com",
    external: true,
  },
  {
    title: "What is a Command Advisor?",
    description:
      "Learn about the modern alternative to fractional CFOs for service businesses.",
    href: "https://command-advisors.com",
    external: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Resources
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            Free tools and guides from the Omnyra network to help you run a more
            profitable contracting business.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target={resource.external ? "_blank" : undefined}
                rel={resource.external ? "noopener noreferrer" : undefined}
                className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                  {resource.title}
                  {resource.external && (
                    <span className="text-[var(--muted)] text-sm ml-2">↗</span>
                  )}
                </h3>
                <p className="text-[var(--muted)]">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20 text-center">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              Want Personalized Help?
            </h3>
            <p className="text-[var(--muted)] mb-4">
              A Command Advisor provides 1-on-1 financial guidance plus 24/7 AI
              monitoring of your business.
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
