import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-8xl font-bold text-[var(--teal)] mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
          Page Not Found
        </h1>
        <p className="text-[var(--muted)] text-lg mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-[var(--teal)] text-black font-semibold rounded-xl hover:bg-[var(--teal)]/80 transition-all hover:no-underline"
          >
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="px-8 py-4 border border-[var(--teal)]/40 text-[var(--text)] font-semibold rounded-xl hover:border-[var(--teal)] transition-all hover:no-underline"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
