import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Run once on initial document load; route changes do not replay the intro.
export default function Intro({ children }) {
  const [visible, setVisible] = useState(() =>
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setVisible(false), 2100);
    const dismiss = (event) => {
      if (event.key === 'Escape') setVisible(false);
    };
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onPreferenceChange = () => {
      if (preference.matches) setVisible(false);
    };
    window.addEventListener('keydown', dismiss);
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', dismiss);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [visible]);

  return (
    <>
      {!visible && children}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="intro"
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16, pointerEvents: 'none' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="intro-orbit" aria-hidden="true" />
            <div className="intro-content">
              <motion.p className="intro-label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="blue-dot" /> AI / AX PORTFOLIO
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
                Yu Halyn<span>.</span>
              </motion.h1>
              <div className="intro-journey" aria-label="Research to AI to Service">
                {['Research', 'AI', 'Service'].map((word, index) => (
                  <motion.span key={word} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}>
                    {index > 0 && <i aria-hidden="true">→</i>}{word}
                  </motion.span>
                ))}
              </div>
              <motion.div className="intro-rule" aria-hidden="true" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }} />
            </div>
            <button className="intro-skip" onClick={() => setVisible(false)}>건너뛰기 <span aria-hidden="true">↗</span></button>
            <span className="intro-footer">RESEARCH INTO REAL-WORLD IMPACT</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
