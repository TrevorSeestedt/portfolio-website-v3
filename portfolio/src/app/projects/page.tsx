import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 pt-12 md:pt-16 animate-fade-in-up">
        <h1 className="relative inline-block text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[720px]">
          A collection of things I&apos;ve built. Each project represents a different challenge and
          a chance to learn something new.
        </p>
      </section>

      {/* Project Grid */}
      <section className="w-full max-w-[960px] mx-auto px-5 md:px-4 mt-12 md:mt-16 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group/card block rounded-2xl hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-4 -mx-4 md:mx-0"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-gray-200 dark:bg-zinc-800 rounded-xl mb-5 overflow-hidden">
                <div className="w-full h-full bg-gray-300 dark:bg-zinc-700 animate-pulse group-hover/card:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
