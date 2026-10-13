import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Lock, X } from "lucide-react";
import Pipeline from "./Pipeline";
import { ICONS } from "../icons";
import type { Project } from "../data";

export default function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;
  const Icon = ICONS[project.icon];

  // Portaled so it stacks above the fixed nav (main is its own stacking context).
  return createPortal(
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="case-title">
      <div className="modal-panel" style={{ ["--hue" as string]: project.hue }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero">
          <div className="project-dots" />
          <div className="project-orb" />
          <div className="relative z-10 flex items-center gap-3 mb-4">
            <div className="project-icon">{Icon && <Icon size={24} strokeWidth={1.6} />}</div>
            {project.isNew && <span className="badge-new">New</span>}
          </div>
          <h3 id="case-title" className="relative z-10 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <button ref={closeRef} onClick={onClose} className="modal-close" aria-label="Close case study">
          <X size={18} />
        </button>

        <div className="p-6 md:p-9 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text)]">{project.summary}</p>

          {project.pipeline && (
            <div className="mt-8">
              <p className="eyebrow mb-4">How it flows</p>
              <Pipeline steps={project.pipeline} hue={project.hue} />
            </div>
          )}

          <p className="eyebrow mt-8 mb-4">What I built</p>
          <ul className="space-y-3">
            {project.bullets.map((b) => (
              <li key={b} className="text-[var(--text-dim)] leading-relaxed flex gap-3">
                <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.hue }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 pt-6 border-t border-white/10">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn-primary">
                View source on GitHub <ArrowUpRight size={16} />
              </a>
            ) : (
              <p className="text-sm text-[var(--text-dim)] flex items-center gap-2">
                <Lock size={14} /> Source is private — happy to walk through it in an interview.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
