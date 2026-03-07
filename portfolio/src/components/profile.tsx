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
    <div className="profile-dropdown relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="profile-button nav-icon focus:outline-none"
        aria-label="Toggle profile menu"
        aria-expanded={isOpen}
      >
        <img className="profile-icon" src={profileImg.src} alt="Profile Menu" />
      </button>

      {isOpen && (
        <div className="profile-menu">
          <div className="profile-menu-inner">
            <Link
              href="/login"
              className="profile-menu-item"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="profile-menu-item"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
            <button type="button" className="profile-menu-google">
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
