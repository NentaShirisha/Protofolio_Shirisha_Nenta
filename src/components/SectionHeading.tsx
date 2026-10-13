import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({ index, eyebrow, title, subtitle, align = "left" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <p className={`eyebrow ${center ? "justify-center" : ""}`}>
        <span className="font-mono text-[var(--accent)]">{index}</span>
        <span className="eyebrow-line" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] mt-4">{title}</h2>
      {subtitle && <p className="text-[var(--text-dim)] mt-5 text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
