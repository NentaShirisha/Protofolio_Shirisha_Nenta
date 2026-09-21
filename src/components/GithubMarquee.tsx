import { Github } from "lucide-react";
import { githubRepos, profile } from "../data";

export default function GithubMarquee() {
  const track = [...githubRepos, ...githubRepos];

  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-24">
      <div className="reveal flex items-center justify-between mb-6 flex-wrap gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-dim)]">
          More builds on <span className="text-[var(--accent-2)]">GitHub</span>
        </p>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs flex items-center gap-1.5 text-[var(--text-dim)] hover:text-[var(--accent-2)] transition"
        >
          <Github size={14} /> @NentaShirisha
        </a>
      </div>

      <div className="reveal relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-3 w-max marquee-track">
          {track.map((repo, i) => (
            <a
              key={`${repo.slug}-${i}`}
              href={`${profile.links.github}/${repo.slug}`}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[var(--accent)]/50 hover:bg-white/[0.06] transition-colors min-w-[220px]"
            >
              <p className="text-sm font-medium text-[var(--text)]">{repo.name}</p>
              <p className="text-[11px] text-[var(--text-dim)] mt-1">{repo.language}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
