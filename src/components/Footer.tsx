import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { NAV, OFFICIAL } from '../data/site'
import { LogoWordmark } from './Logo'
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from './SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute -top-24 -right-16 size-[26rem] rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-flame-500/10 blur-3xl" />

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="rounded-2xl bg-white/95 p-3 pr-5 w-fit">
              <LogoWordmark compact />
            </div>
            <p className="mt-6 max-w-md text-[0.92rem] leading-relaxed text-ink-300">
              An <strong className="font-semibold text-white">unofficial, student-made redesign concept</strong> for Apni
              Pathshala — a not-for-profit building India’s largest network of community-run digital learning PODs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a href={OFFICIAL.instagram} target="_blank" rel="noreferrer noopener" aria-label="Apni Pathshala on Instagram" className="grid size-10 place-items-center rounded-full bg-white/8 text-ink-200 transition-colors hover:bg-brand-600 hover:text-white">
                <InstagramIcon />
              </a>
              <a href={OFFICIAL.x} target="_blank" rel="noreferrer noopener" aria-label="Apni Pathshala on X" className="grid size-10 place-items-center rounded-full bg-white/8 text-ink-200 transition-colors hover:bg-brand-600 hover:text-white">
                <XIcon />
              </a>
              <a href={OFFICIAL.facebook} target="_blank" rel="noreferrer noopener" aria-label="Apni Pathshala on Facebook" className="grid size-10 place-items-center rounded-full bg-white/8 text-ink-200 transition-colors hover:bg-brand-600 hover:text-white">
                <FacebookIcon />
              </a>
              <a href={OFFICIAL.youtube} target="_blank" rel="noreferrer noopener" aria-label="Apni Pathshala on YouTube" className="grid size-10 place-items-center rounded-full bg-white/8 text-ink-200 transition-colors hover:bg-brand-600 hover:text-white">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase">Explore</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase">Apni Pathshala, officially</h3>
            <ul className="mt-5 space-y-3.5 text-[0.92rem]">
              <li>
                <a href={OFFICIAL.site} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-brand-300">
                  apnipathshala.org <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a href={`mailto:${OFFICIAL.emailStartPod}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="size-4 text-brand-400" /> {OFFICIAL.emailStartPod}
                </a>
              </li>
              <li>
                <a href={`mailto:${OFFICIAL.emailPcSupport}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="size-4 text-brand-400" /> {OFFICIAL.emailPcSupport}
                </a>
              </li>
              <li>
                <a href={OFFICIAL.whatsapp} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="size-4 text-flame-400" /> {OFFICIAL.phone}
                </a>
              </li>
            </ul>
            <Link to="/donate" className="mt-6 inline-flex rounded-full bg-flame-500 px-5 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-flame-600">
              How to actually donate
            </Link>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-[0.8rem] leading-relaxed text-ink-400">
          <p>
            <strong className="font-semibold text-ink-200">Disclaimer:</strong> This website is an independent student project
            created for design practice and is <strong className="font-semibold text-ink-200">not affiliated with, endorsed by or
            operated by Apni Pathshala</strong>. No donations, payments or personal data are collected here. Facts, figures and
            photographs were taken from Apni Pathshala’s public website and social profiles; all rights to their content, imagery
            and brand remain with them. For anything official — starting a POD, support, partnerships or giving — please use{' '}
            <a href={OFFICIAL.site} target="_blank" rel="noreferrer noopener" className="font-semibold text-brand-300 underline underline-offset-2">
              apnipathshala.org
            </a>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-[0.8rem] text-ink-500 sm:flex-row">
          <p>© {year} — a student’s concept, shared with respect for the original.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block size-2 animate-pulse rounded-full bg-emerald-400" />
            Built with React, Tailwind CSS &amp; a lot of admiration.
          </p>
        </div>
      </div>
    </footer>
  )
}
