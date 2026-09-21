import { Briefcase } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-5xl mx-auto px-6 py-20">
      <div className="reveal mb-12">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--accent-2)] mb-3">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Where the work happened</h2>
      </div>

      <div className="relative pl-8 border-l border-white/10">
        {experience.map((job, i) => (
          <div key={job.role} className="reveal relative pb-12 last:pb-0" style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] glow-ring" />
            <div className="flex items-center gap-2 text-[var(--accent-2)] mb-1">
              <Briefcase size={16} />
              <span className="text-xs uppercase tracking-wider">{job.period}</span>
            </div>
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="text-sm text-[var(--text-dim)] mb-3">{job.company}</p>
            <ul className="space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="text-sm text-[var(--text-dim)] flex gap-2">
                  <span className="text-[var(--accent)] mt-1">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
