'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from './ThemeToggle';
import ProfileDropdown from './Profile';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;

const navLinkBase = [
  'font-sans font-normal text-base no-underline text-black dark:text-white',
  'py-3 px-5 max-sm:py-[0.55rem] max-sm:px-[0.8rem] max-sm:text-[0.9rem]',
  'rounded-lg relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
  'hover:bg-black/[0.06] dark:hover:bg-white/[0.06]',
  "after:content-[''] after:absolute after:bottom-2 after:max-sm:bottom-1 after:left-1/2",
  'after:w-0 after:h-px after:bg-black dark:after:bg-white',
  'after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)]',
  'hover:after:w-[60%]',
].join(' ');

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar flex justify-center bg-transparent z-[1000] h-[60px] w-full transition-opacity duration-[600ms] ease-in-out">
      <nav
        className="w-full max-w-[1000px] flex items-center relative justify-center px-3 sm:justify-end sm:px-4 md:px-5"
        aria-label="Primary navigation"
      >
        <div className="static sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          <ul className="flex list-none m-0 p-0 items-center gap-5 sm:gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-active={isActive || undefined}
                    className={`${navLinkBase} ${isActive ? 'after:w-[60%]' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2 absolute right-3 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0">
          <ThemeToggle />
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
}
