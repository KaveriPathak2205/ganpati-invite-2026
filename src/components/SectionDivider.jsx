export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <span className="h-px w-16 bg-gold/40" />
      <svg viewBox="0 0 24 24" className="mx-3 h-4 w-4">
        <ellipse cx="12" cy="17" rx="9" ry="3.2" fill="#C9A227" />
        <path d="M12 11 Q9 6 12 1 Q15 6 12 11 Z" fill="#E8871E" />
      </svg>
      <span className="h-px w-16 bg-gold/40" />
    </div>
  );
}
