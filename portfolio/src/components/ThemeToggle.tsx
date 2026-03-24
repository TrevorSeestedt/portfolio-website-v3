'use client';

import { useEffect, useState } from 'react';

import moonIcon from '../app/assets/moon.png';
import sunIcon from '../app/assets/sun.png';

const STORAGE_KEY = 'theme';

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark);
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next = stored ? stored === 'dark' : true;

    setIsDark(next);
    applyTheme(next);
  }, []);

  return (
    <button
      type="button"
      className="group opacity-95 bg-transparent border-none cursor-pointer p-2.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center w-10 h-10 hover:opacity-100 hover:bg-black/[0.06] dark:hover:bg-white/[0.12]"
      aria-label="Toggle theme"
      onClick={() => {
        setIsDark((prev) => {
          const next = !prev;
          applyTheme(next);
          return next;
        });
      }}
    >
      <img
        className="w-[18px] h-[18px] block transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-80 group-hover:opacity-100 dark:brightness-0 dark:invert"
        src={(isDark ? sunIcon : moonIcon).src}
        alt=""
        aria-hidden="true"
      />
    </button>
  );
}
