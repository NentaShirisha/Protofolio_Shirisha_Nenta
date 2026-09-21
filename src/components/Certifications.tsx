import { Award } from "lucide-react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-16">
      <div className="reveal mb-8">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--accent-2)] mb-3">Certifications &amp; Achievements</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Proof of the process</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {certifications.map((c, i) => (
          <div
            key={c}
            className="reveal p-5 rounded-2xl border border-white/10 bg-white/[0.03] flex items-start gap-3"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Award size={18} className="text-[var(--accent-2)] shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--text-dim)]">{c}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
