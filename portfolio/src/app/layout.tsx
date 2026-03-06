import type { ReactNode } from 'react';
import './globals.css';

import Navbar from '@/components/Navbar';

import emailIcon from './assets/email.png';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import telephoneIcon from './assets/telephone.png';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Trevor Seestedt',
  description: 'Personal portfolio of Trevor Seestedt.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Navbar />

          <main className="container page-content">{children}</main>

          <footer className="footer">
            <div className="footer-container">
              <div className="social-links">
                <a
                  className="social-link"
                  href="https://github.com/TrevorSeestedt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img className="social-icon" src={githubIcon.src} alt="" aria-hidden="true" />
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/trevorseestedt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img className="social-icon" src={linkedinIcon.src} alt="" aria-hidden="true" />
                </a>
                <a
                  className="social-link"
                  href="mailto:seestedttrevor@gmail.com"
                  aria-label="Email"
                >
                  <img className="social-icon" src={emailIcon.src} alt="" aria-hidden="true" />
                </a>
                <a className="social-link" href="tel:6103226475" aria-label="Telephone">
                  <img
                    className="social-icon"
                    src={telephoneIcon.src}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="copyright">© Trevor Seestedt. All rights reserved.</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

