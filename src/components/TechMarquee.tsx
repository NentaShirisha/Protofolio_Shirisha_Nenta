import { Asterisk } from "lucide-react";
import { marqueeTech } from "../data";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 font-display text-2xl md:text-4xl font-semibold tracking-tight whitespace-nowrap">
            <span className={i % 2 ? "text-outline" : ""}>{t}</span>
            <Asterisk size={22} className="text-[var(--accent)] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative py-10 overflow-hidden" aria-hidden="true">
      <div className="tech-band -rotate-[2deg] scale-x-125">
        <Row />
      </div>
      <div className="tech-band tech-band-alt rotate-[1.5deg] scale-x-125 -mt-3">
        <Row reverse />
      </div>
    </div>
  );
}
