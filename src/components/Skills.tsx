import type { PointerEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ICONS } from "../icons";
import { skillGroups } from "../data";

// Bento layout: the big AI/ML group gets a 2×2 tile.
const SPAN: Record<string, string> = {
  "AI/ML & Data Science": "md:col-span-2 lg:col-span-2 lg:row-span-2",
};

const spotlight = (e: PointerEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Toolkit"
        title={
          <>
            Skills &amp; <span className="font-serif italic font-normal text-gradient">stack</span>
          </>
        }
        subtitle="The languages, frameworks and platforms I reach for — from the UI layer down to models and pipelines."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-dense">
        {skillGroups.map((g, i) => {
          const Icon = ICONS[g.icon];
          const big = g.title.startsWith("AI/ML");
          return (
            <Reveal key={g.title} delay={(i % 4) * 70} variant="scale" className={SPAN[g.title] ?? ""}>
              <div onPointerMove={spotlight} className={`card spotlight-card p-6 h-full ${big ? "skill-feature" : ""}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`icon-tile ${big ? "" : "icon-tile-sm"}`}>{Icon && <Icon size={big ? 22 : 18} />}</div>
                  <div>
                    <h3 className={`font-display font-semibold tracking-tight ${big ? "text-xl" : "text-base"}`}>{g.title}</h3>
                    <p className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-wider">{g.skills.length} skills</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className={`skill-chip ${big ? "skill-chip-lg" : ""}`}>
                      {s}
                    </span>
                  ))}
                </div>
                {big && (
                  <p className="mt-6 text-sm text-[var(--text-dim)] leading-relaxed border-t border-white/10 pt-5">
                    Currently going deep on <span className="text-[var(--text)]">AI agents</span> and{" "}
                    <span className="text-[var(--text)]">Generative AI</span> — orchestrating LLMs, OCR and validation
                    steps into end-to-end automations.
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
