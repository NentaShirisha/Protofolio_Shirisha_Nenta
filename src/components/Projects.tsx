import { useCallback, useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import CaseStudy from "./CaseStudy";
import Reveal from "./Reveal";
import { projectFilters, projects } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);

  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title={
          <>
            Things I&rsquo;ve <span className="font-serif italic font-normal text-gradient">built</span>
          </>
        }
        subtitle="From multi-agent document automation to accessible deep-learning apps. Click any project for the full story."
      />

      <Reveal className="flex flex-wrap gap-2 mb-10" delay={80}>
        {projectFilters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-chip ${filter === f ? "filter-chip-on" : ""}`}
              aria-pressed={filter === f}
            >
              {f}
              <span className="font-mono text-[10px] opacity-60">{count}</span>
            </button>
          );
        })}
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p, i) => (
          <ProjectCard
            key={`${filter}-${p.id}`}
            project={p}
            index={projects.indexOf(p)}
            onOpen={() => setOpenId(p.id)}
            className={`card-enter ${p.featured ? "md:col-span-2" : ""}`}
            style={{ animationDelay: `${i * 70}ms` }}
          />
        ))}
      </div>

      <CaseStudy project={projects.find((p) => p.id === openId) ?? null} onClose={close} />
    </section>
  );
}
