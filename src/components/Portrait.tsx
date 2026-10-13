import { useRef, type PointerEvent } from "react";
import { Bot, Brain, Briefcase, Code2, Container, Database, LayoutGrid, Sparkles, type LucideIcon } from "lucide-react";

const ORBIT: { Icon: LucideIcon; label: string }[] = [
  { Icon: Code2, label: "Python" },
  { Icon: LayoutGrid, label: "React" },
  { Icon: Brain, label: "ML / DL" },
  { Icon: Database, label: "SQL" },
  { Icon: Container, label: "Docker" },
  { Icon: Bot, label: "AI Agents" },
];

export default function Portrait() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !tiltRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltRef.current.style.transform = `rotateX(${py * -8}deg) rotateY(${px * 10}deg)`;
  };
  const onLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  return (
    <div className="portrait-scene hero-in" style={{ animationDelay: "0.35s" }} onPointerMove={onMove} onPointerLeave={onLeave}>
      {/* glow behind the frame */}
      <div className="portrait-glow" />

      {/* rotating orbit of tech icons */}
      <div className="orbit" aria-hidden="true">
        <div className="orbit-track">
          {ORBIT.map(({ Icon, label }, i) => (
            <div key={label} className="orbit-item" style={{ ["--a" as string]: `${(360 / ORBIT.length) * i}deg` }}>
              <div className="orbit-chip" title={label}>
                <Icon size={18} strokeWidth={1.7} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={tiltRef} className="portrait-tilt">
        <div className="portrait-frame">
          <img src="/portrait.webp" alt="Portrait of Shirisha Nenta" width={640} height={800} draggable={false} />
          <div className="portrait-shade" />
        </div>

        <div className="float-chip float-chip-a">
          <span className="chip-icon">
            <Briefcase size={15} />
          </span>
          <span>
            <span className="block text-[11px] text-[var(--text-dim)] leading-none mb-1">Currently at</span>
            <span className="block text-sm font-semibold leading-none">ILURA AI</span>
          </span>
        </div>

        <div className="float-chip float-chip-b">
          <span className="font-display text-2xl font-semibold text-gradient leading-none">10+</span>
          <span className="text-[11px] text-[var(--text-dim)] leading-tight">
            projects
            <br />
            delivered
          </span>
        </div>

        <div className="float-chip float-chip-c">
          <Sparkles size={14} className="text-[var(--accent-2)]" />
          <span className="text-xs font-medium">AI Agents · GenAI</span>
        </div>
      </div>
    </div>
  );
}
