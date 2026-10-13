import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "blur";
  style?: CSSProperties;
};

// Scroll-triggered entrance. Owns its own observer, so it also works for
// elements that mount later (e.g. after a project filter change).
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, variant = "up", style }: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
