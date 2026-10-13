type Props = { text: string; className?: string; delay?: number; gradient?: boolean };

// Per-letter entrance for the hero name. Animations are paused until the
// intro loader finishes (see `html:not(.ready)` in index.css).
// `gradient` paints the gradient on each letter (offset so it reads as one
// continuous sweep) — a parent background-clip breaks once letters animate.
export default function SplitReveal({ text, className = "", delay = 0, gradient = false }: Props) {
  const chars = Array.from(text);
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`split-char ${gradient ? "char-gradient" : ""}`}
          style={{
            animationDelay: `${delay + i * 0.045}s`,
            ...(gradient && {
              backgroundSize: `${chars.length * 100}% 100%`,
              backgroundPosition: `${(i / Math.max(1, chars.length - 1)) * 100}% 0`,
            }),
          }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
