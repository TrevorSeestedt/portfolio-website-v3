'use client';

import { useState, useEffect } from 'react';

const INTRO_SEEN_KEY = 'portfolio_intro_seen';
const HELLO_TEXT = 'Hello!';
const WELCOME_TEXT = 'Welcome to my website';
const TYPEWRITER_DELAY_MS = 100;
const HELLO_HOLD_MS = 800;
const HELLO_FADE_MS = 600;
const POST_WELCOME_HOLD_MS = 800;
const MOVE_TO_HEADER_MS = 700;
const CONTENT_REVEAL_MS = 600;

type IntroPhase =
  | 'idle'
  | 'helloTyping'
  | 'helloHold'
  | 'helloFadeOut'
  | 'welcomeTyping'
  | 'welcomeHold'
  | 'moveToHeader'
  | 'contentReveal'
  | 'done';

export default function HomeIntro() {
  const [phase, setPhase] = useState<IntroPhase>('idle');
  const [activeText, setActiveText] = useState(HELLO_TEXT);
  const [visibleChars, setVisibleChars] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasSeenIntro = sessionStorage.getItem(INTRO_SEEN_KEY) === 'true';

    if (hasSeenIntro) {
      setPhase('done');
      setActiveText(WELCOME_TEXT);
      setVisibleChars(WELCOME_TEXT.length);
      setOverlayVisible(false);
      setShowSecondLine(true);
      return;
    }

    setPhase('helloTyping');
    setActiveText(HELLO_TEXT);
    document.body.classList.add('home-intro-active');
  }, []);

  useEffect(() => {
    if (!overlayVisible) {
      document.body.classList.remove('home-intro-active');
    }
    return () => document.body.classList.remove('home-intro-active');
  }, [overlayVisible]);

  useEffect(() => {
    if (phase !== 'helloTyping' && phase !== 'welcomeTyping') return;

    if (visibleChars >= activeText.length) {
      setPhase(phase === 'helloTyping' ? 'helloHold' : 'welcomeHold');
      return;
    }

    const timer = setTimeout(() => {
      setVisibleChars((prev) => prev + 1);
    }, TYPEWRITER_DELAY_MS);

    return () => clearTimeout(timer);
  }, [phase, visibleChars, activeText]);

  useEffect(() => {
    if (phase === 'helloHold') {
      const timer = setTimeout(() => setPhase('helloFadeOut'), HELLO_HOLD_MS);
      return () => clearTimeout(timer);
    }

    if (phase === 'helloFadeOut') {
      const timer = setTimeout(() => {
        setActiveText(WELCOME_TEXT);
        setVisibleChars(0);
        setPhase('welcomeTyping');
      }, HELLO_FADE_MS);
      return () => clearTimeout(timer);
    }

    if (phase === 'welcomeHold') {
      const timer = setTimeout(() => setPhase('moveToHeader'), POST_WELCOME_HOLD_MS);
      return () => clearTimeout(timer);
    }

    if (phase === 'moveToHeader') {
      const timer = setTimeout(() => {
        setPhase('contentReveal');
        setShowSecondLine(true);
      }, MOVE_TO_HEADER_MS);
      return () => clearTimeout(timer);
    }

    if (phase === 'contentReveal') {
      const timer = setTimeout(() => {
        sessionStorage.setItem(INTRO_SEEN_KEY, 'true');
        setOverlayVisible(false);
        setPhase('done');
      }, CONTENT_REVEAL_MS);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const displayText = activeText.slice(0, visibleChars);
  const showCursor =
    phase !== 'helloFadeOut' &&
    (phase === 'done' || phase === 'welcomeHold' || phase === 'moveToHeader' || phase === 'contentReveal'
      ? activeText === WELCOME_TEXT
      : true);

  const heroStageClass =
    phase === 'moveToHeader' || phase === 'contentReveal'
      ? 'home-intro-hero--header'
      : phase === 'done'
        ? ''
        : 'home-intro-hero--center';

  return (
    <>
      {overlayVisible && (
        <div
          className={`home-intro-overlay ${phase === 'contentReveal' ? 'home-intro-overlay-exit' : ''}`}
          aria-hidden="true"
        />
      )}

      <section className="home-intro-main" aria-label="Home">
        <div className={`home-intro-hero ${heroStageClass}`}>
          <h1
            className={`home-intro-line1 ${phase === 'helloFadeOut' ? 'home-intro-line1-fadeout' : ''}`}
          >
            {displayText}
            {showCursor && <span className="home-intro-cursor" />}
          </h1>
          <h2
            className={`home-intro-line2 ${showSecondLine ? 'home-intro-line2-visible' : ''}`}
          >
            Hi, I am Trevor Seestedt
          </h2>
        </div>
      </section>
    </>
  );
}
