import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import { githubRepos, languageColors, profile } from "../data";

export default function GithubMarquee() {
  const track = [...githubRepos, ...githubRepos];

  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-12">
      <Reveal className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <p className="text-sm text-[var(--text-dim)]">
          <span className="text-[var(--text)] font-medium">{githubRepos.length}+ more builds</span> on GitHub — fraud detection,
          computer vision, forecasting &amp; more.
        </p>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">
          <Github size={15} /> @NentaShirisha <ArrowUpRight size={14} />
        </a>
      </Reveal>

      <Reveal className="marquee-pause-wrap relative overflow-hidden marquee-fade">
        <div className="flex gap-3 w-max marquee-track marquee-slow">
          {track.map((repo, i) => (
            <a
              key={`${repo.slug}-${i}`}
              href={`${profile.links.github}/${repo.slug}`}
              target="_blank"
              rel="noreferrer"
              tabIndex={i >= githubRepos.length ? -1 : 0}
              className="repo-chip"
            >
              <Github size={15} className="text-[var(--text-dim)] shrink-0" />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-[var(--text)] truncate max-w-[260px]">{repo.name}</span>
                <span className="flex items-center gap-1.5 text-[11px] text-[var(--text-dim)] mt-0.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: languageColors[repo.language] ?? "#888" }} />
                  {repo.language}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
