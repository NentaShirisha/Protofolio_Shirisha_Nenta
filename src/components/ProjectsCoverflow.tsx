import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects, type Project } from "../data";

export default function ProjectsCoverflow() {
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);

  const go = (dir: 1 | -1) => {
    setActive((a) => (a + dir + projects.length) % projects.length);
  };

  useEffect(() => {
    if (openId) return;
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  const activeProject = projects[active];

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-24">
      <div className="reveal mb-14 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--accent-2)] mb-3">Projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">The creative universe</h2>
        <p className="text-[var(--text-dim)] mt-3 max-w-lg mx-auto text-sm">
          Ten-plus shipped builds across AI/ML, NLP and full-stack web. Three flagship projects, in orbit.
        </p>
      </div>

      <div className="reveal coverflow-stage relative h-[380px] sm:h-[440px] flex items-center justify-center">
        {/* glowing floor */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-24 rounded-[50%] coverflow-floor transition-colors duration-700"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${activeProject.hue}55, transparent 70%)` }}
        />

        {projects.map((p, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const visible = abs <= 2;
          return (
            <button
              key={p.id}
              onClick={() => (isActive ? setOpenId(p.id) : setActive(i))}
              className="absolute w-[220px] sm:w-[280px] h-[300px] sm:h-[340px] rounded-2xl border border-white/10 overflow-hidden text-left transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${offset * 62}%) translateZ(${isActive ? 0 : -220}px) rotateY(${
                  offset * -32
                }deg) scale(${isActive ? 1 : 0.82})`,
                opacity: visible ? (isActive ? 1 : 0.45) : 0,
                zIndex: 10 - abs,
                pointerEvents: visible ? "auto" : "none",
                background: `linear-gradient(160deg, ${p.hue}33, #0c0808 65%)`,
                boxShadow: isActive ? `0 0 60px -10px ${p.hue}88` : "none",
              }}
            >
              <div className="flex flex-col h-full p-5 justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-dim)]">
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-2 leading-snug">{p.title}</h3>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/15 text-[var(--text-dim)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  {isActive && (
                    <span className="text-xs font-medium" style={{ color: p.hue }}>
                      View case study →
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent-2)] transition"
          aria-label="Previous project"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              aria-label={`Go to ${p.title}`}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                background: i === active ? p.hue : "rgba(255,255,255,0.2)",
                transform: i === active ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent-2)] transition"
          aria-label="Next project"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <CaseStudy project={projects.find((p) => p.id === openId) ?? null} onClose={() => setOpenId(null)} />
    </section>
  );
}

function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 fade-in"
      style={{ background: "rgba(4,2,2,0.88)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/10"
        style={{ background: "#0c0808" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-48 sm:h-64 relative flex items-end p-6 sm:p-8"
          style={{
            background: `linear-gradient(200deg, ${project.hue}, #0c0808 75%)`,
          }}
        >
          <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(circle at 30% 20%, ${project.hue}, transparent 60%)` }} />
          <h3 className="relative font-display text-2xl sm:text-3xl font-bold text-glow">{project.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition"
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/15 text-[var(--text-dim)]">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[var(--text-dim)] mb-5">{project.summary}</p>
          <ul className="space-y-2">
            {project.bullets.map((b) => (
              <li key={b} className="text-sm text-[var(--text-dim)] flex gap-2">
                <span style={{ color: project.hue }} className="mt-1">
                  ›
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 text-sm font-medium hover:underline"
              style={{ color: project.hue }}
            >
              View source on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
