import HomeIntro from '@/components/HomeIntro';

export default function HomePage() {
  return(
    <main className="min-h-screen pb-24">
      <HomeIntro />

      {/* 1. Added 'group' here so hovering this section triggers the header animation */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 mt-8 md:mt-12 animate-fade-in-up">
        
        {/* 2. Added relative positioning and the navbar's underline animation classes, customized to grow from left to right */}
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Lorem ipsum dolor sit 
        </h2>

        {/* 3. Removed the box (bg, border, p-8) so the text sits completely flush and natural */}
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="/about" 
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-80 transition-opacity"
          >
            More About Me
          </a>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </div>

      </section>

      {/* --- LIVE STATUS SECTION (Spotify & Steam) --- */}
      <section className="w-full max-w-[960px] mx-auto px-5 md:px-4 mt-20 md:mt-32 mb-12 animate-fade-in-up">
        
        {/* Grid Container: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16">
          
          {/* --- SPOTIFY COLUMN --- */}
          <div className="group flex flex-col">
            <h2 className="relative inline-block self-start text-2xl font-semibold mb-6 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
              Recently on Spotify
            </h2>
            
            {/* Stacked Boxes Container */}
            <div className="flex flex-col gap-3">
              {/* Placeholder Track 1 */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-zinc-800">
                <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-700 rounded-md shrink-0 animate-pulse" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium text-gray-900 dark:text-white truncate">Song Title Placeholder</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 truncate">Artist Name</span>
                </div>
              </div>

              {/* Placeholder Track 2 */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-zinc-800">
                <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-700 rounded-md shrink-0 animate-pulse" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium text-gray-900 dark:text-white truncate">Another Song Title</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 truncate">Different Artist</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- STEAM COLUMN --- */}
          <div className="group flex flex-col">
            <h2 className="relative inline-block self-start text-2xl font-semibold mb-6 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
              Current Status
            </h2>
            
            {/* Steam Status Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
              <div className="w-16 h-16 bg-gray-200 dark:bg-zinc-700 rounded-lg shrink-0 animate-pulse" />
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">
                  Currently Playing
                </span>
                <span className="font-medium text-gray-900 dark:text-white truncate text-lg">
                  Game Title Placeholder
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  Steam
                </span>
              </div>
            </div>
            
          </div>

        </div>
      </section>
    </main>
  );
}
