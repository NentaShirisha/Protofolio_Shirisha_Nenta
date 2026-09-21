import { useMemo } from "react";

type Props = {
  count?: number;
  className?: string;
};

export default function Particles({ count = 36, className = "" }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        bottom: Math.random() * 30,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        dx: (Math.random() - 0.5) * 120,
        dy: -(220 + Math.random() * 260),
      })),
    [count]
  );

  return (
    <div className={`particle-field ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={
            {
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
