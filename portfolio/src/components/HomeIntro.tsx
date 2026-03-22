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

const heroBase = 'text-center text-inherit w-full max-w-[960px] mx-auto';

const heroCenter = [
  'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  'z-[10001] w-[min(calc(100vw-40px),960px)] m-0',
  'max-md:w-[min(calc(100vw-32px),960px)]',
].join(' ');

const heroHeader = [
  'fixed left-1/2 top-[clamp(84px,14vh,130px)] -translate-x-1/2',
  'z-[10001] w-[min(calc(100vw-40px),960px)] m-0',
  'transition-[top,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
  'max-sm:top-[88px] max-md:w-[min(calc(100vw-32px),960px)]',
].join(' ');

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
      ? heroHeader
      : phase === 'done'
        ? ''
        : heroCenter;

  return (
    <>
      {overlayVisible && (
        <div
          className={`fixed inset-0 z-[10000] bg-white dark:bg-black transition-opacity duration-[600ms] ease-in-out ${
            phase === 'contentReveal' ? 'opacity-0 pointer-events-none' : ''
          }`}
          aria-hidden="true"
        />
      )}

      <section className="pt-[calc(clamp(84px,14vh,130px)-60px)]" aria-label="Home">
        <div className={`${heroBase} ${heroStageClass}`}>
          <h1
            className={`font-sans text-[clamp(1.5rem,5vw,2.5rem)] font-normal mb-2 leading-[1.4] ${
              phase === 'helloFadeOut' ? 'opacity-0 transition-opacity duration-[350ms] ease-in-out' : ''
            }`}
          >
            {displayText}
            {showCursor && (
              <span className="inline-block w-0.5 h-[1em] ml-0.5 bg-current align-text-bottom animate-blink" />
            )}
          </h1>
          <h2
            className={`font-sans text-[clamp(1.05rem,3vw,1.5rem)] font-light opacity-0 translate-y-3 transition-[opacity,transform] duration-[600ms] ease-in-out ${
              showSecondLine ? '!opacity-100 !translate-y-0' : ''
            }`}
          >
            Hi, I am Trevor Seestedt
          </h2>
        </div>
      </section>
    </>
  );
}
