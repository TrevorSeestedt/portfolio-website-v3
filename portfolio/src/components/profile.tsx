'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

import profileImg from '@/app/assets/profile.png';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group cursor-pointer opacity-95 bg-transparent border-none p-2.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center w-10 h-10 hover:opacity-100 hover:bg-black/[0.06] dark:hover:bg-white/[0.12] focus:outline-none"
        aria-label="Toggle profile menu"
        aria-expanded={isOpen}
      >
        <img
          className="w-6 h-6 block rounded-full object-cover transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-80 group-hover:opacity-100 dark:brightness-0 dark:invert"
          src={profileImg.src}
          alt="Profile Menu"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-black border border-black/[0.08] dark:border-white/10 rounded-lg p-2 z-50">
          <div className="flex flex-col gap-1">
            <Link
              href="/login"
              className="block font-sans text-[0.95rem] font-normal text-black dark:text-white no-underline py-3 px-4 rounded-lg transition-all duration-200 text-center hover:bg-black/[0.06] dark:hover:bg-white/[0.12]"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block font-sans text-[0.95rem] font-normal text-black dark:text-white no-underline py-3 px-4 rounded-lg transition-all duration-200 text-center hover:bg-black/[0.06] dark:hover:bg-white/[0.12]"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
            <button
              type="button"
              className="w-full font-sans text-[0.95rem] font-normal text-black dark:text-white bg-transparent border border-black/15 dark:border-white/20 py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 mt-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.12]"
            >
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
