// Animated left-to-right flow: each step lights up in turn while a pulse
// travels along the connectors.
export default function Pipeline({ steps, hue, compact = false }: { steps: string[]; hue: string; compact?: boolean }) {
  const cycle = steps.length * 0.55;
  return (
    <div className={`pipeline ${compact ? "pipeline-compact" : ""}`} style={{ ["--hue" as string]: hue }}>
      {steps.map((s, i) => (
        <div key={s} className="pipeline-step">
          <span
            className="pipeline-node"
            style={{ animationDuration: `${cycle}s`, animationDelay: `${i * 0.55}s` }}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span className="pipeline-link" aria-hidden="true">
              <span style={{ animationDuration: `${cycle}s`, animationDelay: `${i * 0.55 + 0.25}s` }} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
