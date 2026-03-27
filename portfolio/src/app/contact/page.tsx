import githubIcon from '@/app/assets/github.png';
import linkedinIcon from '@/app/assets/linkedin.png';

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 pt-12 md:pt-16 animate-fade-in-up">
        <h1 className="relative inline-block text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Contact
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[720px]">
          Have a question or want to work together? Drop me a message and I&apos;ll get back to you
          as soon as I can.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-full max-w-[960px] mx-auto px-5 md:px-4 mt-12 md:mt-16 animate-fade-in-up">
        <form className="max-w-[600px]">
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/[0.08] dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/[0.08] dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/[0.08] dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="self-start font-sans font-medium text-base text-white dark:text-black bg-black dark:bg-white py-3 px-8 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-80 active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Social Links */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 mt-20 md:mt-28 animate-fade-in-up">
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Elsewhere
        </h2>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/TrevorSeestedt"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-4 p-4 -mx-4 md:mx-0 rounded-2xl hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <img
              className="w-6 h-6 object-contain opacity-80 group-hover/link:opacity-100 dark:brightness-0 dark:invert transition-opacity duration-300"
              src={githubIcon.src}
              alt=""
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900 dark:text-white">GitHub</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                @TrevorSeestedt
              </span>
            </div>
            <span
              aria-hidden="true"
              className="ml-auto text-gray-400 dark:text-gray-600 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/link:translate-x-1"
            >
              &rarr;
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/trevor-seestedt/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-4 p-4 -mx-4 md:mx-0 rounded-2xl hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <img
              className="w-6 h-6 object-contain opacity-80 group-hover/link:opacity-100 dark:brightness-0 dark:invert transition-opacity duration-300"
              src={linkedinIcon.src}
              alt=""
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                trevor-seestedt
              </span>
            </div>
            <span
              aria-hidden="true"
              className="ml-auto text-gray-400 dark:text-gray-600 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/link:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
