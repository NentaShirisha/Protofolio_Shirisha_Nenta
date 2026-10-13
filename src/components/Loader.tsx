import { useEffect, useState } from "react";

const DURATION = 1300;
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

// Short intro: a 0→100 counter with the name, then the curtain lifts.
export default function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }
    let raf = 0;
    let timeout = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      setCount(Math.round(ease(p) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        timeout = window.setTimeout(onDone, 750);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [onDone]);

  return (
    <div className={`loader ${leaving ? "loader-leave" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <p className="font-mono text-xs tracking-[0.4em] text-[var(--text-dim)] uppercase mb-4">Portfolio · 2026</p>
        <p className="font-display text-5xl md:text-7xl font-semibold tracking-tight">
          Shirisha<span className="text-[var(--accent)]">.</span>
        </p>
        <div className="loader-bar mt-8">
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </div>
      </div>
      <span className="loader-count font-display">{count}</span>
    </div>
  );
}
