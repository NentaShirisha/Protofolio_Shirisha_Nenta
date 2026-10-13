import { useRef, useState, type MouseEvent, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function MagneticButton({ href, children, className, target, rel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.35, y: relY * 0.5 });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) scale(${pressed ? 0.94 : 1})`,
        transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </a>
  );
}
