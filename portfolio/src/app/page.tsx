import HomeIntro from '@/components/HomeIntro';
import { projects } from '@/data/projects';

export default function HomePage() {

    const featuredProjects = projects.slice(0,2); 

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
	
      {/* --- FEATURED PROJECTS SECTION --- */}
      <section className="group w-full max-w-[960px] mx-auto px-5 md:px-4 mt-20 md:mt-32 animate-fade-in-up">
        
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
          Featured Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group/card block rounded-2xl border border-transparent hover:bg-gray-50 dark:hover:bg-zinc-800/30 hover:border-gray-200 dark:hover:border-zinc-800 transition-all p-4 -mx-4 md:mx-0"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-gray-200 dark:bg-zinc-800 rounded-xl mb-5 overflow-hidden">
                 <div className="w-full h-full bg-gray-300 dark:bg-zinc-700 animate-pulse group-hover/card:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-10 flex justify-center">
          <a href="/projects" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
            View All Projects <span aria-hidden="true">&rarr;</span>
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
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-700 rounded-md shrink-0 animate-pulse" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium text-gray-900 dark:text-white truncate">Song Title Placeholder</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 truncate">Artist Name</span>
                </div>
              </div>

              {/* Placeholder Track 2 */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
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
            
            {/* Header row with Sleek Status Badge */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="relative inline-block text-2xl font-semibold text-gray-900 dark:text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
                Steam Activity
              </h2>
              
              {/* Prototype Online Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-green-700 dark:text-green-400 uppercase">
                  Online
                </span>
              </div>
            </div>
            
            {/* Stacked Boxes Container */}
            <div className="flex flex-col gap-3">
              
              {/* Currently Playing Box */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="w-16 h-12 bg-gray-200 dark:bg-zinc-700 rounded-md shrink-0 animate-pulse" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium text-gray-900 dark:text-white truncate">
                    Game Title Placeholder
                  </span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-500 truncate">
                    Currently Playing
                  </span>
                </div>
              </div>

              {/* Recently Played Box */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="w-16 h-12 bg-gray-200 dark:bg-zinc-700 rounded-md shrink-0 animate-pulse" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium text-gray-900 dark:text-white truncate">
                    Recent Game Title
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    24.5 hrs past 2 weeks
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
