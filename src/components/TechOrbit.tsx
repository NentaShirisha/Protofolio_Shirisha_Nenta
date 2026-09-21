import { useRef, type MouseEvent } from "react";
import {
  Code2,
  Brain,
  Database,
  GitBranch,
  Container,
  LayoutGrid,
  Server,
  BarChart3,
  Bot,
  Sparkles,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const ICONS: { Icon: LucideIcon; label: string; top: string; left: string; delay: number; size: number }[] = [
  { Icon: Code2, label: "Python", top: "10%", left: "6%", delay: 0, size: 46 },
  { Icon: Brain, label: "ML / DL", top: "6%", left: "68%", delay: 1.1, size: 50 },
  { Icon: Database, label: "MySQL", top: "66%", left: "4%", delay: 2.4, size: 42 },
  { Icon: GitBranch, label: "Git", top: "78%", left: "80%", delay: 0.6, size: 40 },
  { Icon: Container, label: "Docker", top: "18%", left: "86%", delay: 1.8, size: 44 },
  { Icon: LayoutGrid, label: "React", top: "38%", left: "88%", delay: 0.3, size: 44 },
  { Icon: Server, label: "Django", top: "40%", left: "2%", delay: 2.0, size: 44 },
  { Icon: BarChart3, label: "PySpark", top: "84%", left: "22%", delay: 1.4, size: 40 },
  { Icon: Bot, label: "Generative AI", top: "4%", left: "38%", delay: 2.6, size: 42 },
  { Icon: Sparkles, label: "NLP", top: "60%", left: "92%", delay: 0.9, size: 38 },
  { Icon: Cpu, label: "TensorFlow", top: "82%", left: "58%", delay: 1.6, size: 42 },
];

export default function TechOrbit() {
  const portraitRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = portraitRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${py * -6}deg`);
    el.style.setProperty("--tilt-y", `${px * 8}deg`);
  };

  const handleMouseLeave = () => {
    const el = portraitRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div className="relative w-full h-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Infinity light trail — a dim orbit track plus two racing comet heads */}
      <svg
        viewBox="0 0 800 520"
        className="absolute inset-0 w-full h-full trail-glow"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2e5f" />
            <stop offset="50%" stopColor="#ff4d2e" />
            <stop offset="100%" stopColor="#ff8a3d" />
          </linearGradient>
          <radialGradient id="cometCoreA" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff2e8" />
            <stop offset="35%" stopColor="#ff8a3d" />
            <stop offset="100%" stopColor="#ff4d2e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cometCoreB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff2e8" />
            <stop offset="35%" stopColor="#ff2e5f" />
            <stop offset="100%" stopColor="#ff2e5f" stopOpacity="0" />
          </radialGradient>
          <filter id="cometGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          id="orbitPath"
          d="M400,320
             C300,170 120,170 100,320
             C120,460 300,460 400,320
             C500,170 680,170 700,320
             C680,460 500,460 400,320 Z"
          fill="none"
          stroke="url(#trailGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="trail-path"
          opacity="0.45"
        />

        {/* comet head #1 */}
        <circle r="7" fill="url(#cometCoreA)" filter="url(#cometGlow)">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
        {/* comet head #2 — half a lap behind, different hue, crosses the first mid-loop */}
        <circle r="5.5" fill="url(#cometCoreB)" filter="url(#cometGlow)">
          <animateMotion dur="7s" begin="-3.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
      </svg>

      {/* Central portrait — the "moment" */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 portrait-enter">
        {/* ground light pool at her feet */}
        <div
          className="absolute left-1/2 bottom-[2%] w-[180px] h-[36px] sm:w-[230px] sm:h-[46px] rounded-[50%] pointer-events-none aura-pulse-x"
          style={{
            background: "radial-gradient(ellipse, rgba(255,138,61,0.65) 0%, rgba(255,77,46,0.25) 55%, transparent 80%)",
            filter: "blur(6px)",
            zIndex: 0,
            animationDelay: "0.4s",
          }}
        />
        {/* pulsing spotlight aura behind the subject */}
        <div
          className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full aura-pulse pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,159,96,0.55) 0%, rgba(255,77,46,0.25) 45%, transparent 72%)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />
        <div className="silhouette relative" style={{ perspective: "800px", zIndex: 1 }}>
          <div
            ref={portraitRef}
            className="portrait-inner"
            style={{
              transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
            }}
          >
            <img
              src="/portrait.png"
              alt="Shirisha Nenta"
              className="portrait-mask relative w-[190px] sm:w-[240px] h-auto select-none pointer-events-none"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,138,61,0.5)) drop-shadow(0 0 46px rgba(255,77,46,0.25))",
              }}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Floating tool cards */}
      {ICONS.map(({ Icon, label, top, left, delay, size }, i) => (
        <div
          key={label}
          className="absolute float-card"
          style={{ top, left, animationDelay: `${delay}s`, ["--rot" as string]: `${(i % 2 === 0 ? -1 : 1) * 4}deg` }}
        >
          <div
            className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(255,77,46,0.15)] hover:shadow-[0_0_28px_rgba(255,77,46,0.4)] transition-shadow"
            style={{ width: size, height: size }}
          >
            <Icon size={size * 0.5} color="#ffb08a" strokeWidth={1.6} />
            <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-wide text-[var(--text-dim)] opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
