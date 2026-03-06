'use client';

import { useEffect, useState } from 'react';

import moonIcon from '../app/assets/moon.png';
import sunIcon from '../app/assets/sun.png';

const STORAGE_KEY = 'theme';

function applyTheme(isDark: boolean) {
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const next = stored ? stored === 'dark' : prefersDark;

    setIsDark(next);
    applyTheme(next);
  }, []);

  return (
    <button
      type="button"
      className="theme-toggle"
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
        className="theme-icon"
        src={(isDark ? sunIcon : moonIcon).src}
        alt=""
        aria-hidden="true"
      />
    </button>
  );
}

