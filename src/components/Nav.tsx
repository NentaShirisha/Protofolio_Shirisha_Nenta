import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[rgba(6,4,4,0.8)] backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-semibold tracking-wide text-sm">
          SHIRISHA<span className="text-[var(--accent-2)]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--text-dim)]">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--text)] transition">
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm text-[var(--text-dim)] bg-[rgba(6,4,4,0.95)]">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-[var(--text)] transition">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
