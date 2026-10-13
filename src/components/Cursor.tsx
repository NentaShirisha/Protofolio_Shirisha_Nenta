import { useEffect, useRef } from "react";

// Desktop-only cursor: a dot that tracks exactly, a ring that trails with
// easing and grows over links/buttons, plus a soft page-wide spotlight.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      document.documentElement.style.setProperty("--spot-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--spot-y", `${e.clientY}px`);
      if (dot.current) dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const interactive = (e.target as Element | null)?.closest?.("a, button, [data-cursor]");
      ring.current?.classList.toggle("cursor-ring-hover", !!interactive);
    };
    const onDown = () => ring.current?.classList.add("cursor-ring-down");
    const onUp = () => ring.current?.classList.remove("cursor-ring-down");
    const onLeave = () => {
      dot.current?.classList.add("cursor-hidden");
      ring.current?.classList.add("cursor-hidden");
    };
    const onEnter = () => {
      dot.current?.classList.remove("cursor-hidden");
      ring.current?.classList.remove("cursor-hidden");
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div className="page-spotlight" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
      <div ref={dot} className="cursor-dot" aria-hidden="true">
        <span />
      </div>
    </>
  );
}
