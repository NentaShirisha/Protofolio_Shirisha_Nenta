import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Shrink on scroll; tuck away when scrolling down, return when scrolling up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 600 && y > last + 4);
      if (y < last - 4) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = active ? linkRefs.current[active] : null;
    setPill(el ? { left: el.offsetLeft, width: el.offsetWidth, visible: true } : (p) => ({ ...p, visible: false }));
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-5"
        } ${hidden && !open ? "-translate-y-28" : "translate-y-0"}`}
      >
        <nav
          className={`nav-shell flex items-center justify-between gap-6 w-full max-w-5xl rounded-full pl-5 pr-2 py-2 transition-all duration-500 ${
            scrolled ? "nav-shell-scrolled" : ""
          }`}
        >
          <a href="#home" className="font-display font-semibold tracking-tight text-lg flex items-center gap-2">
            <span className="logo-mark">SN</span>
            <span className="hidden sm:inline">
              Shirisha<span className="text-[var(--accent)]">.</span>
            </span>
          </a>

          <div className="relative hidden md:flex items-center text-sm">
            <span
              className="nav-pill"
              style={{ transform: `translateX(${pill.left}px)`, width: pill.width, opacity: pill.visible ? 1 : 0 }}
            />
            {LINKS.map((l) => (
              <a
                key={l.id}
                ref={(el) => {
                  linkRefs.current[l.id] = el;
                }}
                href={`#${l.id}`}
                className={`relative z-10 px-4 py-2 rounded-full transition-colors ${
                  active === l.id ? "text-[var(--text)]" : "text-[var(--text-dim)] hover:text-[var(--text)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary btn-sm hidden sm:inline-flex">
              Resume <ArrowUpRight size={15} />
            </a>
            <button
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu md:hidden ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <div className="flex flex-col gap-2 px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="mobile-link font-display text-5xl font-semibold tracking-tight"
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            className="mobile-link btn-primary mt-8 self-start"
            style={{ transitionDelay: open ? `${120 + LINKS.length * 60}ms` : "0ms" }}
          >
            Download Resume <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
