import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Fill the timeline rail as the list scrolls past the middle of the screen.
  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      setProgress(Math.min(1, Math.max(0, (mid - r.top) / r.height)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where the work <span className="font-serif italic font-normal text-gradient">happened</span>
          </>
        }
        subtitle="Production frontend work, freelance AI/ML delivery, and an internship building models end to end."
      />

      <div ref={listRef} className="relative">
        <div className="timeline-rail" aria-hidden="true">
          <span style={{ transform: `scaleY(${progress})` }} />
        </div>

        <div className="space-y-8 md:space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 80} variant="left" className="relative pl-12 md:pl-20">
              <span className={`timeline-node ${progress * experience.length > i + 0.05 ? "timeline-node-on" : ""}`} />
              <article className="card card-hover p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-[var(--accent-2)] tracking-wider uppercase flex items-center gap-2">
                      {job.period}
                      {job.current && <span className="tag tag-live">Current</span>}
                    </p>
                    <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold mt-2 tracking-tight">{job.role}</h3>
                    <p className="text-[var(--text-dim)] mt-1 flex items-center gap-2 flex-wrap">
                      <span className="text-[var(--text)] font-medium">{job.company}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="inline-flex items-center gap-1 text-sm">
                        <MapPin size={13} /> {job.location}
                      </span>
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-[var(--text-dim)] leading-relaxed flex gap-3">
                      <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
