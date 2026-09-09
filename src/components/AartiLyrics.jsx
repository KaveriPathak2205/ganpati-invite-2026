import { useState } from "react";
import { aartis } from "../data/content";

function AartiCard({ aarti }) {
  const [showTransliteration, setShowTransliteration] = useState(false);

  return (
    <div className="rounded-lg border border-gold/40 bg-white/60 p-6 shadow-sm sm:p-8">
      <h3 className="font-display text-xl text-maroon">{aarti.title}</h3>
      <p className="font-devanagari text-sm text-gold-dark">{aarti.subtitle}</p>

      <pre className="mt-5 whitespace-pre-wrap break-words font-devanagari text-lg leading-relaxed text-ink">
        {aarti.devanagari}
      </pre>

      <button
        type="button"
        onClick={() => setShowTransliteration((v) => !v)}
        className="mt-5 rounded-full border border-gold/50 px-4 py-1.5 text-sm font-medium text-maroon transition-colors hover:bg-gold/10"
        aria-expanded={showTransliteration}
      >
        {showTransliteration ? "Hide transliteration" : "Show transliteration"}
      </button>

      {showTransliteration && (
        <pre className="mt-4 whitespace-pre-wrap break-words border-t border-gold/20 pt-4 font-body text-sm leading-relaxed text-ink/70">
          {aarti.transliteration}
        </pre>
      )}
    </div>
  );
}

export default function AartiLyrics() {
  return (
    <section id="aarti" className="mx-auto max-w-2xl px-6 py-14">
      <h2 className="text-center font-display text-2xl text-maroon">
        Aarti
      </h2>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink/60">
        Follow along on your phone during the aarti.
      </p>

      <div className="mt-8 space-y-6">
        {aartis.map((aarti) => (
          <AartiCard key={aarti.id} aarti={aarti} />
        ))}
      </div>
    </section>
  );
}
