'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import profileImg from '@/app/assets/profile.png';

import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Primary navigation">
        <div className="nav-center">
          <ul className="nav-links">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={isActive ? 'active' : undefined}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <span className="nav-icon" aria-hidden="true">
            <img className="profile-icon" src={profileImg.src} alt="" />
          </span>
        </div>
      </nav>
    </header>
  );
}

