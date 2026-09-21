import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import Particles from "./Particles";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,77,46,0.18), transparent 65%), var(--bg)",
          }}
        />
        <Particles count={22} />
      </div>

      <div className="reveal max-w-2xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--accent-2)] mb-3">Contact</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-glow mb-4">
          Let&rsquo;s create it together.
        </h2>
        <p className="text-[var(--text-dim)] mb-10">
          Open to full-stack, AI/ML and data engineering roles &amp; freelance builds.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-black font-semibold text-sm tracking-wide hover:brightness-110 transition glow-ring"
        >
          Say Hello
        </a>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--text-dim)]">
          <span className="flex items-center gap-2">
            <Mail size={15} /> {profile.email}
          </span>
          <span className="flex items-center gap-2">
            <Phone size={15} /> {profile.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} /> {profile.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-[var(--text-dim)]">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-2)] transition" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-2)] transition" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-2)] transition" aria-label="LeetCode">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="reveal mt-20 pt-8 border-t border-white/10 text-center text-xs text-[var(--text-dim)]">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind.
      </div>
    </section>
  );
}
