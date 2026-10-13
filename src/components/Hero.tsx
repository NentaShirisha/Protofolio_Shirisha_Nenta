import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Particles from "./Particles";
import Portrait from "./Portrait";
import SplitReveal from "./SplitReveal";
import RotatingText from "./RotatingText";
import MagneticButton from "./MagneticButton";
import { profile } from "../data";

const SOCIALS = [
  { href: profile.links.github, label: "GitHub", Icon: Github },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-24">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-grid" />
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <Particles count={34} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--bg)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-10 items-center">
        <div className="relative z-10 text-center lg:text-left">
          <div className="hero-in inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-4 py-1.5 text-xs text-[var(--text-dim)]">
            <span className="status-dot" />
            Open to full-time roles · {profile.location.split(",")[0]}
          </div>

          <h1 className="mt-7 font-display font-semibold tracking-[-0.04em] leading-[0.92] text-[clamp(3.4rem,9vw,7.5rem)]">
            <SplitReveal text={profile.firstName} delay={0.1} />
            <br />
            <SplitReveal text="Nenta." delay={0.45} gradient className="font-serif italic font-normal tracking-[-0.02em] pr-2" />
          </h1>

          <p className="hero-in mt-7 text-xl md:text-2xl font-display text-[var(--text)]" style={{ animationDelay: "0.8s" }}>
            <span className="text-[var(--text-dim)]">I&rsquo;m a </span>
            <RotatingText words={profile.roles} />
          </p>

          <p
            className="hero-in mt-5 max-w-xl mx-auto lg:mx-0 text-[var(--text-dim)] text-base md:text-lg leading-relaxed"
            style={{ animationDelay: "0.95s" }}
          >
            {profile.intro}
          </p>

          <div
            className="hero-in mt-9 flex items-center justify-center lg:justify-start gap-3 flex-wrap"
            style={{ animationDelay: "1.1s" }}
          >
            <MagneticButton href="#projects" className="btn-primary">
              View my work <ArrowDownRight size={17} />
            </MagneticButton>
            <MagneticButton href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download size={16} /> Download resume
            </MagneticButton>
          </div>

          <div
            className="hero-in mt-10 flex items-center justify-center lg:justify-start gap-3"
            style={{ animationDelay: "1.25s" }}
          >
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="icon-btn"
              >
                <Icon size={17} />
              </a>
            ))}
            <span className="h-px w-10 bg-white/15 mx-2 hidden sm:block" />
            <span className="text-xs font-mono text-[var(--text-dim)] whitespace-nowrap hidden sm:inline">RGUKT Basar · CSE ’26</span>
          </div>
        </div>

        <Portrait />
      </div>

      <a href="#about" className="scroll-cue hidden md:flex" aria-label="Scroll to about">
        <span className="scroll-mouse">
          <span />
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </a>
    </section>
  );
}
