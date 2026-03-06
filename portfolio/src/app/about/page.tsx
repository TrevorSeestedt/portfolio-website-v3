export default function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="page-enter space-y-6 md:space-y-8"
    >
      <header className="space-y-3">
        <h1
          id="about-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          About this portfolio
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          A flexible template for telling your story. Replace this content with
          your background, experience, and what you are currently focused on.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <article className="rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
            Narrative
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Use this column for a longer-form narrative about your journey,
            values, and the type of work you enjoy. The structure is intentionally
            neutral so it can be tailored to many profiles.
          </p>
        </article>

        <aside className="rounded-xl border border-slate-200 bg-white/60 p-5 text-sm shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
            Quick facts
          </h2>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300">
            <li>Location, role, or focus area</li>
            <li>Preferred technologies or domains</li>
            <li>Any brief highlight you want to surface</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

