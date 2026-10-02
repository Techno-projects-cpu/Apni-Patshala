/**
 * A hand-rebuilt SVG nod to the Apni Pathshala mark: two learners side by side —
 * one in brand blue, one in flame orange — above a shared "path".
 * The official logo and wordmark belong to Apni Pathshala.
 */
export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Apni Pathshala mark">
      <rect width="64" height="64" rx="16" fill="#fff" />
      <rect x="1" y="1" width="62" height="62" rx="15.5" fill="none" stroke="#0266FF" strokeOpacity="0.12" strokeWidth="2" />
      <rect x="10" y="10" width="22" height="22" rx="6" fill="#0266FF" />
      <circle cx="21" cy="19.4" r="3.7" fill="#fff" />
      <path d="M14.6 29.4a6.4 6.4 0 0 1 12.8 0z" fill="#fff" />
      <rect x="32" y="10" width="22" height="22" rx="6" fill="#F58220" />
      <circle cx="43" cy="19.4" r="3.7" fill="#fff" />
      <path d="M36.6 29.4a6.4 6.4 0 0 1 12.8 0z" fill="#fff" />
      <path
        d="M13 41.5c7.8 0 13.2 2.8 19 9 5.8-6.2 11.2-9 19-9"
        fill="none"
        stroke="#0266FF"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LogoWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className={compact ? 'h-9 w-9' : 'h-11 w-11'} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] leading-[1.05] font-extrabold tracking-tight text-flame-500">
          Apni
        </span>
        <span className="font-display text-[1.35rem] leading-[1.05] font-extrabold tracking-tight text-brand-600">
          Pathshala
        </span>
      </span>
    </span>
  )
}
