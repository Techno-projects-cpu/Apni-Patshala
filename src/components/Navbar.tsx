import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Info, Menu, X } from 'lucide-react'
import { NAV, OFFICIAL } from '../data/site'
import { LogoWordmark } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Unofficial-project ribbon */}
      <div className="relative z-50 bg-ink-950 text-center text-[0.74rem] font-medium text-ink-200 sm:text-[0.78rem]">
        <div className="shell flex items-center justify-center gap-2 py-2">
          <Info className="size-3.5 shrink-0 text-flame-400" />
          <span className="leading-tight">
            An <strong className="font-semibold text-white">unofficial student redesign concept</strong>
            <span className="hidden sm:inline"> — not affiliated with Apni Pathshala, and no donations are collected here.</span>
          </span>
          <Link to="/donate" className="hidden shrink-0 font-semibold text-flame-300 underline decoration-flame-400/60 underline-offset-2 hover:text-flame-200 md:inline">
            Read&nbsp;this&nbsp;first
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'border-b border-ink-200/70 bg-white/85 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="shell flex h-[4.6rem] items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label="Apni Pathshala home">
            <LogoWordmark compact={scrolled} />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-[0.88rem] font-semibold transition-colors ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-ink-100 hover:text-ink-950'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={OFFICIAL.site}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-4 py-2 text-[0.82rem] font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 xl:inline-flex"
            >
              Official site
              <ArrowUpRight className="size-3.5" />
            </a>
            <Link
              to="/start-a-pod"
              className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-[0.85rem] font-semibold text-white shadow-glow transition-colors hover:bg-brand-700 sm:inline-flex"
            >
              Start a POD
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-ink-200 bg-white text-ink-800 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 overflow-y-auto bg-white pt-[6.7rem] lg:hidden"
          >
            <nav className="shell flex flex-col gap-1 py-6" aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3.5 font-display text-lg font-bold ${
                        isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-900 hover:bg-ink-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-4 grid gap-2">
                <Link
                  to="/start-a-pod"
                  className="rounded-full bg-brand-600 px-5 py-3.5 text-center font-semibold text-white"
                >
                  Start a POD
                </Link>
                <a
                  href={OFFICIAL.site}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-ink-200 px-5 py-3.5 text-center font-semibold text-ink-800"
                >
                  Official website ↗
                </a>
              </div>
              <p className="mt-6 rounded-2xl bg-flame-50 px-4 py-3 text-[0.8rem] leading-relaxed text-flame-900">
                Unofficial student project — no donations are collected here. Contact the real team via the Donate page.
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
