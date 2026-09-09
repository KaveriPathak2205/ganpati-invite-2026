// A hand-drawn toran (mango-leaf + marigold garland) border, rendered as a
// tiling SVG pattern so it stretches cleanly across any width.
export default function Toran({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <pattern id="toran-tile" width="100" height="44" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="100" y2="3" stroke="#E8CD7A" strokeWidth="1.5" />

          {/* leaf 1 */}
          <line x1="25" y1="3" x2="25" y2="9" stroke="#E8CD7A" strokeWidth="1" />
          <path d="M25,9 C15,17 15,29 25,37 C35,29 35,17 25,9 Z" fill="#7A1620" />
          <circle cx="25" cy="35" r="2.2" fill="#E8CD7A" />

          {/* leaf 2 */}
          <line x1="75" y1="3" x2="75" y2="9" stroke="#E8CD7A" strokeWidth="1" />
          <path d="M75,9 C65,17 65,29 75,37 C85,29 85,17 75,9 Z" fill="#E8871E" />
          <circle cx="75" cy="35" r="2.2" fill="#E8CD7A" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#toran-tile)" />
    </svg>
  );
}
