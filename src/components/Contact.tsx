import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Particles from "./Particles";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import { profile } from "../data";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "shirisha-nenta", href: profile.links.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "@NentaShirisha", href: profile.links.github, Icon: Github },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative px-6 pt-28 md:pt-36 pb-10 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="contact-glow" />
        <div className="hero-grid hero-grid-bottom" />
        <Particles count={20} />
      </div>

      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-4xl mx-auto">
          <p className="eyebrow justify-center">
            <span className="font-mono text-[var(--accent)]">05</span>
            <span className="eyebrow-line" />
            Contact
          </p>
          <h2 className="font-display font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.8rem,8vw,6.5rem)] mt-6">
            Let&rsquo;s build something{" "}
            <span className="font-serif italic font-normal tracking-[-0.02em] text-gradient">intelligent.</span>
          </h2>
          <p className="text-[var(--text-dim)] mt-6 text-lg max-w-xl mx-auto">
            Open to full-stack, AI/ML and data engineering roles — and always happy to talk about agents, models and
            great UI.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <MagneticButton href={`mailto:${profile.email}`} className="btn-primary btn-lg">
              Say hello <ArrowUpRight size={18} />
            </MagneticButton>
            <button onClick={copyEmail} className="btn-ghost btn-lg" aria-live="polite">
              {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANNELS.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 80}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card card-hover channel-card p-5 flex items-center gap-4 group"
              >
                <div className="icon-tile icon-tile-sm">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">{label}</p>
                  <p className="text-sm font-medium truncate">{value}</p>
                </div>
                <ArrowUpRight size={16} className="text-[var(--text-dim)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-2)]" />
              </a>
            </Reveal>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-dim)]">
          <p className="flex items-center gap-2">
            <MapPin size={14} /> {profile.location}
          </p>
          <p>
            © {new Date().getFullYear()} {profile.name} · Designed &amp; built with React + Tailwind
          </p>
          <a href="#home" className="icon-btn" aria-label="Back to top">
            <ArrowUp size={16} />
          </a>
        </footer>
      </div>
    </section>
  );
}
