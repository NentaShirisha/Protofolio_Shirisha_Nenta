import Reveal from "./Reveal";
import { ICONS } from "../icons";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-28 md:pb-36">
      <Reveal>
        <p className="eyebrow mb-6">
          <span className="eyebrow-line" />
          Certifications &amp; achievements
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {certifications.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <Reveal key={c.title} delay={i * 90}>
              <div className="card card-hover cert-card p-6 h-full flex gap-4 items-start">
                <div className="icon-tile icon-tile-sm">{Icon && <Icon size={18} />}</div>
                <div>
                  <p className="font-medium leading-snug">{c.title}</p>
                  <p className="text-sm text-[var(--text-dim)] mt-1">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
