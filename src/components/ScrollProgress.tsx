import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? h.scrollTop / scrollable : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      style={{
        transform: `scaleX(${progress})`,
        transition: "transform 0.12s ease-out",
        background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
        boxShadow: "0 0 12px rgba(255,77,46,0.7)",
      }}
    />
  );
}
