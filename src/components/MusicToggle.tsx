import { useEffect, useRef, useState } from "react";
import { VolumeX } from "lucide-react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/theme.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause theme music" : "Play theme music"}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full border border-white/15 bg-[rgba(14,9,8,0.7)] backdrop-blur-md flex items-center justify-center hover:border-[var(--accent)] hover:scale-105 transition shadow-[0_10px_30px_-10px_rgba(255,90,54,0.6)]"
      >
        {playing ? (
          <span className="flex items-end gap-0.5 h-4" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-0.5 bg-[var(--accent-2)] rounded-full"
                style={{ animation: `eq-bar 0.9s ease-in-out ${i * 0.15}s infinite` }}
              />
            ))}
          </span>
        ) : (
          <VolumeX size={18} className="text-[var(--text-dim)]" />
        )}
      </button>
    </>
  );
}
