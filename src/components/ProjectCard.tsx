import { useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Pipeline from "./Pipeline";
import { ICONS } from "../icons";
import type { Project } from "../data";

type Props = { project: Project; index: number; onOpen: () => void; style?: CSSProperties; className?: string };

export default function ProjectCard({ project: p, index, onOpen, style, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = ICONS[p.icon];

  // Cursor-following spotlight + gentle 3D tilt.
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    const rx = (y / r.height - 0.5) * -5;
    const ry = (x / r.width - 0.5) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen())}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-label={`Open case study: ${p.title}`}
      className={`project-card group ${p.featured ? "project-card-featured" : ""} ${className}`}
      style={{ ["--hue" as string]: p.hue, ...style }}
    >
      <div className="project-visual">
        <div className="project-dots" />
        <div className="project-orb" />
        <div className="relative z-10 flex items-start justify-between">
          <span className="font-mono text-xs text-white/60">{String(index + 1).padStart(2, "0")}</span>
          <div className="flex items-center gap-2">
            {p.isNew && <span className="badge-new">New</span>}
            {p.repo && (
              <span className="w-8 h-8 rounded-full bg-black/30 border border-white/10 flex items-center justify-center">
                <Github size={14} />
              </span>
            )}
          </div>
        </div>

        {p.featured && p.pipeline ? (
          <div className="relative z-10 mt-auto">
            <div className="project-icon mb-5">{Icon && <Icon size={26} strokeWidth={1.6} />}</div>
            <Pipeline steps={p.pipeline} hue={p.hue} compact />
          </div>
        ) : (
          <div className="relative z-10 m-auto project-icon project-icon-lg">{Icon && <Icon size={34} strokeWidth={1.5} />}</div>
        )}
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-display font-semibold tracking-tight leading-snug ${p.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {p.title}
          </h3>
          <span className="project-arrow">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p className="mt-3 text-sm text-[var(--text-dim)] leading-relaxed">{p.summary}</p>
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="tag tag-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
