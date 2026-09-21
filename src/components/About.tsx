import { GraduationCap } from "lucide-react";
import { profile, educationList } from "../data";

export default function About() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-6 py-28">
      <div className="reveal">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--accent-2)] mb-3">About</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The person behind the code</h2>
        <p className="text-[var(--text-dim)] leading-relaxed max-w-3xl">{profile.summary}</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {educationList.map((edu, i) => (
          <div
            key={edu.degree}
            className="reveal flex flex-col sm:flex-row items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center">
              <GraduationCap size={22} className="text-black" />
            </div>
            <div>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-[var(--text-dim)]">
                {edu.school} &middot; {edu.period} &middot; CGPA {edu.cgpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
