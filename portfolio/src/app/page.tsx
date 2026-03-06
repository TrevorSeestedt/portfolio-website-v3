export default function HomePage() {
  return (
    <section
      aria-labelledby="home-heading"
      className="page-enter space-y-6 md:space-y-8"
    >
      <header className="space-y-3">
        <h1
          id="home-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Portfolio home
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          This is the landing view for your portfolio. Replace this copy with
          your own hero content, highlights, or introductions in the consuming
          Next.js project.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
            Overview
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Use this area for a concise summary of who you are and what you do.
            The layout is responsive and optimized for readability across
            devices.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
            Highlights
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Showcase recent work, skills, or achievements here. Swap this
            placeholder content with real data in your Next.js implementation.
          </p>
        </article>
      </div>
    </section>
  );
}

