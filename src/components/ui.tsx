import { motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Minus, Plus } from 'lucide-react'

/* ------------------------------------------------------------------ layout */

export function Section({
  children,
  className = '',
  id,
  as: Tag = 'section',
}: {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
}) {
  return (
    <Tag id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </Tag>
  )
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = 'left',
  tone = 'light',
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}) {
  const centre = align === 'center'
  return (
    <div className={`${centre ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow mb-4 ${tone === 'dark' ? 'text-brand-300' : 'text-brand-600'}`}>
            <span className={`inline-block h-1.5 w-8 rounded-full ${tone === 'dark' ? 'bg-brand-400/60' : 'bg-brand-600/35'}`} />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-[2rem] leading-[1.12] font-extrabold sm:text-[2.6rem] lg:text-[3rem] ${
            tone === 'dark' ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <div className={`mt-5 text-[1.05rem] leading-relaxed ${tone === 'dark' ? 'text-ink-200' : 'text-ink-700'}`}>{body}</div>
        </Reveal>
      )}
    </div>
  )
}

/* ---------------------------------------------------------------- animation */

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = '',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Counter({ to, suffix = '', className = '' }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    let frame = 0
    const total = 60
    const tick = () => {
      frame += 1
      const p = 1 - Math.pow(1 - frame / total, 3)
      setValue(Math.round(to * p))
      if (frame < total) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [inView, to, reduce])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ buttons */

type BtnProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'white'
  size?: 'md' | 'lg'
  className?: string
  icon?: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variants: Record<string, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-glow',
  accent: 'bg-flame-500 text-white hover:bg-flame-600 shadow-[0_18px_50px_-18px_rgb(245_130_32/0.65)]',
  outline: 'border border-ink-200 bg-white text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700',
  ghost: 'text-ink-800 hover:bg-ink-100',
  white: 'bg-white text-brand-700 hover:bg-brand-50 shadow-soft',
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  onClick,
  type = 'button',
}: BtnProps) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] ${
    size === 'lg' ? 'px-7 py-3.5 text-[0.98rem]' : 'px-5 py-2.5 text-[0.9rem]'
  } ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {icon}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}

export function Pill({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'flame' | 'ink' | 'green' | 'dark' }) {
  const tones = {
    brand: 'bg-brand-50 text-brand-700 ring-brand-200',
    flame: 'bg-flame-50 text-flame-700 ring-flame-200',
    ink: 'bg-ink-100 text-ink-700 ring-ink-200',
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    dark: 'bg-white/10 text-white ring-white/20',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-semibold tracking-wide ring-1 ring-inset ${tones[tone]}`}>
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ gallery */

export function Figure({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
  ratio = 'aspect-[4/3]',
  priority = false,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  imgClassName?: string
  ratio?: string
  priority?: boolean
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl bg-ink-100 shadow-soft ${className}`}>
      <div className={`${ratio} w-full overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045] ${imgClassName}`}
        />
      </div>
      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 via-ink-950/35 to-transparent p-4 pt-12 text-[0.82rem] leading-snug font-medium text-white/95">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ----------------------------------------------------------------- marquee */

export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items]
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-3 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="rounded-full border border-ink-200/80 bg-white px-5 py-2.5 text-[0.85rem] font-semibold whitespace-nowrap text-ink-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* --------------------------------------------------------------- accordion */

export function Accordion({ items, tone = 'light' }: { items: readonly { q: string; a: string }[]; tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState<number | null>(0)
  const dark = tone === 'dark'
  return (
    <div className="divide-y divide-ink-200/70">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className={dark ? 'border-white/10' : ''}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className={`font-display text-[1.02rem] font-bold sm:text-[1.1rem] ${dark ? 'text-white' : 'text-ink-950'}`}>
                {item.q}
              </span>
              <span
                className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full transition-colors ${
                  isOpen ? 'bg-brand-600 text-white' : dark ? 'bg-white/10 text-white' : 'bg-ink-100 text-ink-600'
                }`}
              >
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className={`pb-6 pr-10 text-[0.96rem] leading-relaxed ${dark ? 'text-ink-200' : 'text-ink-700'}`}>{item.a}</p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------- bits */

export function ScrollCue({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-ink-500">
      {label}
      <ChevronDown className="size-4 animate-bounce" />
    </span>
  )
}

export function DisclaimerNote({ className = '' }: { className?: string }) {
  return (
    <p className={`rounded-2xl border border-flame-200 bg-flame-50/70 px-4 py-3 text-[0.82rem] leading-relaxed text-flame-900 ${className}`}>
      <strong className="font-semibold">Unofficial student project.</strong> This site is not affiliated with Apni Pathshala and
      collects no donations. For anything official, please use{' '}
      <a href="https://www.apnipathshala.org" target="_blank" rel="noreferrer noopener" className="font-semibold underline decoration-flame-400 underline-offset-2">
        apnipathshala.org
      </a>
      .
    </p>
  )
}
