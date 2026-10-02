/**
 * Small hand-written brand glyphs — lucide-react v1 no longer ships brand icons.
 */
type P = { className?: string }

export function InstagramIcon({ className = 'size-4.5' }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function XIcon({ className = 'size-4' }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.9 2H22l-6.8 7.8L22.8 22h-6.3l-4.9-6.4L5.9 22H2.8l7.3-8.3L1.6 2h6.4l4.6 6.1L18.9 2Zm-1.1 18.1h1.7L7.4 3.8H5.6l12.2 16.3Z" />
    </svg>
  )
}

export function FacebookIcon({ className = 'size-4.5' }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14 9.5V7.8c0-.9.2-1.4 1.6-1.4h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2H7.5v3.4h2.8V21H14v-8.1h2.9l.4-3.4H14Z" />
    </svg>
  )
}

export function YoutubeIcon({ className = 'size-4.5' }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.6 7.9a2.6 2.6 0 0 0-1.8-1.8C18.2 5.7 12 5.7 12 5.7s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.9C2 9.5 2 12 2 12s0 2.5.4 4.1a2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.1.4-4.1s0-2.5-.4-4.1ZM10 15.2V8.8l5.4 3.2L10 15.2Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'size-4.5' }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.6 4.75 5.9V21h-4v-5.7c0-1.4-.03-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3V21h-4V9Z" />
    </svg>
  )
}

export function GlobeIcon({ className = 'size-4' }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.6 3.2 2.6 14.8 0 18M12 3c-2.6 3.2-2.6 14.8 0 18" />
    </svg>
  )
}
