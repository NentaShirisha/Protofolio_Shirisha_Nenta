import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-5xl mx-auto px-6 py-20">
      <div className="reveal mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--accent-2)] mb-3">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Tools of the universe</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className="reveal p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--accent)]/50 hover:bg-white/[0.05] transition-colors"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <h3 className="text-sm font-semibold text-[var(--accent-2)] mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-[var(--text-dim)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
