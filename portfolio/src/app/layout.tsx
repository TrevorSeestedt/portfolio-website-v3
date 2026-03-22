import type { ReactNode } from 'react';
import './globals.css';

import Navbar from '@/components/Navbar';

import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Trevor Seestedt',
  description: 'Personal portfolio of Trevor Seestedt.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full bg-white text-black dark:bg-black dark:text-white transition-[background-color,color] duration-300 ease-in-out font-sans leading-relaxed antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var dark=s?s==='dark':true;document.documentElement.classList.toggle('dark',dark);document.body.classList.toggle('dark-mode',dark);})();`,
          }}
        />
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="w-full max-w-[1000px] mx-auto px-4 md:px-5">{children}</main>

          <footer className="footer w-full mt-auto transition-opacity duration-[600ms] ease-in-out">
            <div className="w-[70%] max-w-[1200px] mx-auto flex flex-col items-center">
              <div className="flex justify-center gap-4 mb-2">
                <a
                  className="flex items-center justify-center transition-all duration-300 p-2 rounded-full hover:scale-110"
                  href="https://github.com/TrevorSeestedt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img
                    className="w-6 h-6 object-contain opacity-80 hover:opacity-100 dark:brightness-0 dark:invert"
                    src={githubIcon.src}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
                <a
                  className="flex items-center justify-center transition-all duration-300 p-2 rounded-full hover:scale-110"
                  href="https://www.linkedin.com/in/trevor-seestedt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    className="w-6 h-6 object-contain opacity-80 hover:opacity-100 dark:brightness-0 dark:invert"
                    src={linkedinIcon.src}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="text-center text-black dark:text-white text-[0.9rem]">
                © Trevor Seestedt. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
