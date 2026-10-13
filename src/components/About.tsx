import { GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import { education, profile, stats } from "../data";

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            The person behind <span className="font-serif italic font-normal text-gradient">the code</span>
          </>
        }
      />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
        <div>
          <Reveal>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--text)] font-light">
              I&rsquo;m a <span className="hl">Computer Science graduate</span> from RGUKT Basar who ships real products —
              building interfaces at <span className="hl">ILURA AI</span>, training ML models, and wiring up{" "}
              <span className="hl">multi-agent AI systems</span> that automate real workflows.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[var(--text-dim)] leading-relaxed">{profile.summary}</p>
          </Reveal>

          <Reveal delay={180} className="mt-10">
            <div className="card card-hover p-6 flex gap-5 items-start">
              <div className="icon-tile">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display text-lg font-semibold">{education.degree}</p>
                  <span className="font-mono text-xs text-[var(--text-dim)]">{education.period}</span>
                </div>
                <p className="text-sm text-[var(--text-dim)] mt-1">{education.school}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="tag tag-accent">CGPA {education.cgpa}</span>
                  <span className="tag">
                    <MapPin size={12} /> Basar, Telangana
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} variant="scale">
              <div className="card card-hover stat-card p-6 md:p-7 h-full">
                <p className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-[var(--text-dim)]">{s.label}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={360} className="col-span-2">
            <div className="card p-5 flex items-center gap-4">
              <span className="status-dot shrink-0" />
              <p className="text-sm text-[var(--text-dim)]">
                Based in <span className="text-[var(--text)]">{profile.location}</span> — open to remote &amp; on-site
                roles.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
