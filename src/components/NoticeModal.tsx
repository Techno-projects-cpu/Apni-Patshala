import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { GraduationCap, HeartHandshake, ShieldAlert, X } from 'lucide-react'
import { OFFICIAL } from '../data/site'

const KEY = 'ap-redesign-notice-v1'

/**
 * Shown once per visitor. The brief was explicit: anyone who opens this site
 * should immediately know a student built it, and that donations must go to the
 * real Apni Pathshala team — never through this website.
 */
export function NoticeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let seen = false
    try {
      seen = window.localStorage.getItem(KEY) === '1'
    } catch {
      seen = false
    }
    if (!seen) {
      const t = window.setTimeout(() => setOpen(true), 700)
      return () => window.clearTimeout(t)
    }
  }, [])

  const dismiss = () => {
    try {
      window.localStorage.setItem(KEY, '1')
    } catch {
      /* ignore private-mode failures */
    }
    setOpen(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && dismiss()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink-950/60 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={dismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="notice-title"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-lift"
          >
            <div className="relative bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 pt-7 pb-16 text-white sm:px-8">
              <button
                type="button"
                onClick={dismiss}
                aria-label="Close notice"
                className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <X className="size-4.5" />
              </button>
              <p className="eyebrow text-brand-100">
                <span className="inline-block h-1.5 w-8 rounded-full bg-white/40" />
                Before you scroll
              </p>
              <h2 id="notice-title" className="mt-3 max-w-md text-[1.6rem] leading-tight font-extrabold text-white sm:text-[1.85rem]">
                A student built this, not Apni Pathshala.
              </h2>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-brand-50">
                This is a self-made redesign concept — an unofficial tribute to a cause worth admiring. Everything here is
                transcribed from their public pages.
              </p>
            </div>

            <div className="-mt-10 space-y-3 px-5 sm:px-7">
              <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink-200/70">
                <div className="flex gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1rem] font-bold">Made by a student, trying things out</h3>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-ink-700">
                      No agency, no mandate, no payment. Just a learner experimenting with modern web design and hoping to
                      get the team’s attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-flame-200 bg-flame-50/80 p-5">
                <div className="flex gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-flame-500 text-white">
                    <ShieldAlert className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1rem] font-bold text-flame-900">There is no donate button that takes money</h3>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-flame-900/90">
                      If you genuinely want to donate, please contact the real Apni Pathshala team directly — the Donate page
                      lists their official emails, phone number and website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 px-5 pt-5 pb-6 sm:flex-row sm:px-7">
              <button
                type="button"
                onClick={dismiss}
                className="order-2 flex-1 rounded-full bg-brand-600 px-5 py-3.5 font-semibold text-white shadow-glow transition-colors hover:bg-brand-700 sm:order-1"
              >
                Explore the concept
              </button>
              <Link
                to="/donate"
                onClick={dismiss}
                className="order-1 inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3.5 font-semibold text-ink-900 transition-colors hover:border-flame-300 hover:bg-flame-50 sm:order-2"
              >
                <HeartHandshake className="size-4.5 text-flame-500" />
                I want to donate
              </Link>
            </div>
            <p className="border-t border-ink-100 px-5 py-3 text-center text-[0.72rem] text-ink-500 sm:px-7">
              Official website:{' '}
              <a href={OFFICIAL.site} target="_blank" rel="noreferrer noopener" className="font-semibold text-brand-600 underline underline-offset-2">
                apnipathshala.org
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
