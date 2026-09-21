import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Particles from "./Particles";
import TechOrbit from "./TechOrbit";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-28 pb-10">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(255,77,46,0.16), transparent 60%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,77,46,0.10), transparent 60%), var(--bg)",
          }}
        />
        <Particles count={40} />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[var(--accent-2)] mb-4">
          Full-Stack &amp; AI/ML Engineer
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-glow">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-[var(--text-dim)] text-sm md:text-base">
          {profile.tagline} Crafting intelligent, production-ready products across{" "}
          <span className="text-[var(--text)]">Full-Stack Development</span>,{" "}
          <span className="text-[var(--text)]">Machine Learning</span> and{" "}
          <span className="text-[var(--text)]">Data Engineering</span>.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-black font-semibold text-sm tracking-wide hover:brightness-110 transition glow-ring"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/15 text-sm tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent-2)] transition"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5 text-[var(--text-dim)]">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-2)] transition" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-2)] transition" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-2)] transition" aria-label="LeetCode">
            <ExternalLink size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--accent-2)] transition" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl h-[320px] sm:h-[420px] mx-auto">
        <TechOrbit />
      </div>

      <a
        href="#about"
        className="relative z-10 flex flex-col items-center gap-2 text-[var(--text-dim)] text-xs tracking-widest uppercase animate-bounce"
      >
        Scroll
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
