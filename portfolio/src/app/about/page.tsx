import Link from 'next/link';

const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Git',
  'Docker',
  'REST APIs',
  'HTML & CSS',
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Company Name',
    period: 'Jan 2024 — Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Worked on full-stack web applications using React, Next.js, and Node.js.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Another Company',
    period: 'May 2023 — Dec 2023',
    description:
      'Built and maintained responsive UI components. Collaborated with the design team to implement pixel-perfect interfaces.',
  },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University Name',
    period: '2020 — 2024',
    description:
      'Relevant coursework in Data Structures, Algorithms, Web Development, and Database Systems.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 pt-12 md:pt-16 animate-fade-in-up">
        <h1 className="relative inline-block text-3xl md:text-4xl font-semibold mb-6 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[720px]">
          I&apos;m Trevor Seestedt — a developer who enjoys building clean, performant web
          experiences. I care about thoughtful design, accessible interfaces, and writing code
          that&apos;s easy to maintain. When I&apos;m not coding, you&apos;ll probably find me gaming
          or exploring new music.
        </p>
      </section>

      {/* Skills */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 mt-20 md:mt-28 animate-fade-in-up">
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm font-medium px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 mt-20 md:mt-28 animate-fade-in-up">
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Experience
        </h2>
        <div className="flex flex-col gap-4">
          {experience.map((item) => (
            <div
              key={item.role}
              className="p-5 -mx-5 md:mx-0 md:p-5 rounded-2xl hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-2">
                {item.company}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 mt-20 md:mt-28 animate-fade-in-up">
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Education
        </h2>
        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={item.degree}
              className="p-5 -mx-5 md:mx-0 md:p-5 rounded-2xl hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-2">
                {item.school}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[960px] mx-auto px-5 md:px-4 mt-16 md:mt-24 animate-fade-in-up">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group/btn inline-flex items-center gap-2 font-sans font-normal text-base text-gray-600 dark:text-gray-400 py-2.5 px-5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black/[0.06] dark:hover:bg-white/[0.12] hover:text-black dark:hover:text-white"
          >
            Get in Touch
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/btn:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
