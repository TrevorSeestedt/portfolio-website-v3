import HomeIntro from '@/components/HomeIntro';

export default function HomePage() {
  return(
    <main className="min-h-screen pb-24">
      <HomeIntro />

      {/* the following content will set behind the intro to be revealed following the intro*/}
      <section className="w-full max-w-[960px] mx-auto px-5 md:px-4 mt-8 md:mt-12 animate-fade-in-up">
        <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12 transition-colors duration-300 ease-in-out">
          
          <h2 className ="text 2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Lorem ipsum dolor sit 
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/projects" 
              className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-80 transition-opacity"
            >
              View My Projects
            </a>
            <a 
              href="/about" 
              className="inline-block px-6 py-3 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              More About Me
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
