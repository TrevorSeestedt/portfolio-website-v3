export default function ProjectsPage() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="page-enter space-y-6 md:space-y-8"
    >
      <header className="space-y-3">
        <h1
          id="projects-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Projects
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          A grid-ready layout for the work you want to highlight. Populate these
          tiles with real projects, case studies, or experiments in your Next.js
          implementation.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Project title
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A short description of the project, focusing on outcome and impact.
            </p>
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Placeholder
          </p>
        </article>

        <article className="flex flex-col justify-between rounded-xl border border-dashed border-slate-200 p-5 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <p>
            Add more tiles or convert this into a list, timeline, or case-study
            layout depending on how you prefer to present your work.
          </p>
        </article>
      </div>
    </section>
  );
}

