import { useEffect, useState } from "react";

// Typewriter that types, holds, deletes and moves to the next word.
export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 38 : 75;
    if (!deleting && text === word) delay = 1700;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="whitespace-nowrap">
      <span className="text-gradient">{text}</span>
      <span className="type-caret" aria-hidden="true" />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
