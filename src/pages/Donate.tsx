import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Copy,
  Gift,
  HandHeart,
  HeartHandshake,
  Mail,
  Megaphone,
  MonitorPlay,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { Button, Figure, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { OFFICIAL } from '../data/site'

const CONTACT_ROWS = [
  { icon: Mail, label: 'Start a POD / general', value: OFFICIAL.emailStartPod, href: `mailto:${OFFICIAL.emailStartPod}` },
  { icon: Mail, label: 'PC & warranty support', value: OFFICIAL.emailPcSupport, href: `mailto:${OFFICIAL.emailPcSupport}` },
  { icon: Mail, label: 'CEO — Sagar Tiwari', value: OFFICIAL.emailCeo, href: `mailto:${OFFICIAL.emailCeo}` },
  { icon: Phone, label: 'Phone & WhatsApp', value: OFFICIAL.phone, href: OFFICIAL.whatsapp },
  { icon: ArrowUpRight, label: 'Official website', value: 'apnipathshala.org', href: OFFICIAL.site },
]

const LEGIT_WAYS = [
  {
    icon: Gift,
    title: 'Adopt a POD',
    body: 'Apni Pathshala’s POD Adoption Program lets a supporter sponsor an entire digital classroom — computers, peripherals, curriculum and mentorship — rather than gifting a single device.',
  },
  {
    icon: MonitorPlay,
    title: 'Start a POD yourself',
    body: 'If you have a room, electricity, 10 MBPS internet and the people to run it, the team provides ten PCs, software and mentorship at no cost to you.',
  },
  {
    icon: Users,
    title: 'Volunteer your skills',
    body: 'Apni Pathshala invites community organisers, social activists and professionals to contribute time and skills — teaching, content, design, tech or operations.',
  },
  {
    icon: BookOpen,
    title: 'Give materials, not just money',
    body: 'If you run a company, school or NGO with spare machines, you can write to the team about hardware and partnership support for pods in your region.',
  },
  {
    icon: Megaphone,
    title: 'Refer people',
    body: 'Their own mission statement asks for one simple thing: refer anyone who might want to start a digital learning centre. That costs nothing and genuinely scales the network.',
  },
  {
    icon: HeartHandshake,
    title: 'Back their partners',
    body: 'The PODs are run by local NGOs, trusts and schools. Supporting those organisations directly keeps learning alive in a specific neighbourhood.',
  },
]

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email)
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1800)
        } catch {
          /* clipboard blocked — the email is visible anyway */
        }
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-[0.72rem] font-semibold text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-700"
    >
      <Copy className="size-3" />
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default function Donate() {
  return (
    <>
      {/* --------------------------------------------------- the big notice */}
      <section className="relative overflow-hidden bg-ink-950 pt-16 pb-20 lg:pt-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-flame-500/15 blur-3xl" />
        <div className="shell relative max-w-4xl text-center">
          <Reveal>
            <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-flame-500/15 px-4 py-2 text-[0.75rem] font-bold tracking-[0.14em] text-flame-300 uppercase ring-1 ring-flame-400/30">
              <ShieldAlert className="size-4" />
              Please read this first
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-7 text-[2.3rem] leading-[1.06] font-extrabold text-white sm:text-[3rem]">
              Do not donate on this website. <span className="text-flame-400">There is no way to.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-ink-200">
              A student built this site as a design exercise, hoping to catch the Apni Pathshala team’s attention. There is no UPI
              ID here, no bank details, no payment gateway, no form that collects anything. If you want to give, give to the real
              organisation — here’s exactly how.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={OFFICIAL.site} size="lg" icon={<ArrowUpRight className="size-4.5" />}>
                Go to apnipathshala.org
              </Button>
              <Button href={`mailto:${OFFICIAL.emailStartPod}`} variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Ask them how you can help
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- three truth cards */}
      <Section className="bg-ink-50/70">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: AlertTriangle,
              tone: 'flame',
              title: 'This is a student project',
              body: 'Unofficial, unpaid and unaffiliated. It exists for design practice and as a friendly pitch to the team — not as a channel for money.',
            },
            {
              icon: ShieldCheck,
              tone: 'brand',
              title: 'Nothing here takes payments',
              body: 'No payment links, no QR codes, no wallets, no card forms, no data collection. If you ever see a donation prompt on a copy of this site, it is not mine.',
            },
            {
              icon: HandHeart,
              tone: 'emerald',
              title: 'The real team is easy to reach',
              body: 'Apni Pathshala publishes its own emails and phone number. Write to them directly and you will be talking to the people who actually run the PODs.',
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-3xl border border-ink-200/70 bg-white p-7 shadow-soft">
                <span
                  className={`grid size-11 place-items-center rounded-2xl text-white ${
                    card.tone === 'flame' ? 'bg-flame-500' : card.tone === 'brand' ? 'bg-brand-600' : 'bg-emerald-600'
                  }`}
                >
                  <card.icon className="size-5" />
                </span>
                <h2 className="mt-5 font-display text-[1.15rem] font-bold">{card.title}</h2>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-600">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ contact the team */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Do it properly"
              title="Contact the real Apni Pathshala team"
              body="These are the contact details published on their official website. Reach out, tell them why you want to support the work, and they will guide you. You can also simply mention that a student’s redesign concept brought you here — they’ll know what you mean."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="font-display text-[1rem] font-bold text-emerald-900">Verify before you pay anyone</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-emerald-900/90">
                      Only trust information that comes from <strong className="font-semibold">apnipathshala.org</strong> or from a
                      reply to an email you sent to one of their published addresses. Any website, phone number or QR code asking
                      for money “for Apni Pathshala” without that should be checked with the team first.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {CONTACT_ROWS.map((row) => (
                <li key={row.value} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink-200/70 bg-white p-5 shadow-soft">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <row.icon className="size-4.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.74rem] font-bold tracking-[0.1em] text-ink-500 uppercase">{row.label}</p>
                      <a
                        href={row.href}
                        target={row.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noreferrer noopener"
                        className="block truncate text-[0.95rem] font-semibold text-ink-900 transition-colors hover:text-brand-700"
                      >
                        {row.value}
                      </a>
                    </div>
                  </div>
                  {row.href.startsWith('mailto') && <CopyEmail email={row.value} />}
                </li>
              ))}
              <li className="rounded-2xl border border-ink-200/70 bg-ink-50/70 p-5">
                <p className="text-[0.74rem] font-bold tracking-[0.1em] text-ink-500 uppercase">Social</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { label: 'Instagram', href: OFFICIAL.instagram },
                    { label: 'X', href: OFFICIAL.x },
                    { label: 'Facebook', href: OFFICIAL.facebook },
                    { label: 'YouTube', href: OFFICIAL.youtube },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-ink-200 bg-white px-4 py-2 text-[0.8rem] font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------- legit ways */}
      <Section className="bg-ink-950">
        <SectionHead
          eyebrow="If you still want to help"
          title="What Apni Pathshala’s own site says supporters can do"
          body="None of these routes pass through this website. They are simply the options the organisation itself publishes — summarised here so you know what to ask about."
          tone="dark"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEGIT_WAYS.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-flame-400/40 hover:bg-white/[0.07]">
                <span className="grid size-10 place-items-center rounded-2xl bg-white/10 text-flame-300">
                  <w.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-[1.05rem] font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-300">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800/60 to-ink-900/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h3 className="font-display text-[1.25rem] font-bold text-white">A 30-second message you can send them</h3>
              <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-ink-300">
                Something like: “Hi, I came across a student’s redesign concept for Apni Pathshala and wanted to support your POD
                work. Could you tell me the best way to contribute — adopting a POD, donating equipment, or volunteering?” That’s
                it. They will take it from there.
              </p>
            </div>
            <Button href={`mailto:${OFFICIAL.emailStartPod}?subject=I%20want%20to%20support%20Apni%20Pathshala&body=Hi%20Apni%20Pathshala%20team%2C%0A%0AI%20came%20across%20a%20student%27s%20redesign%20concept%20and%20wanted%20to%20support%20your%20POD%20work.%20Could%20you%20tell%20me%20the%20best%20way%20to%20contribute%3F`} variant="white" size="lg" className="shrink-0">
              Open a draft email
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* -------------------------------------------------------- closing */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Pill tone="flame">
              <HeartHandshake className="size-3.5" />
              Why this page exists
            </Pill>
            <h2 className="mt-5 text-[2rem] leading-tight font-extrabold sm:text-[2.5rem]">
              The most useful thing I can do is point you at the right people.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink-700">
              I’m a student. I don’t handle money, I don’t run PODs and I can’t promise anyone a receipt. What I can do is show
              what Apni Pathshala does in a clearer, friendlier way, and make sure nobody accidentally tries to donate to a
              student’s portfolio project.
            </p>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-700">
              If this concept site happened to bring in even one genuine POD supporter or volunteer, it did its job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/start-a-pod" size="lg" icon={<ArrowUpRight className="size-4.5" />}>
                See how PODs work
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                All official contacts
              </Button>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="grid gap-4">
              <Figure src="/media/pod-classroom.webp" alt="Students learning together at computers in an Apni Pathshala POD" ratio="aspect-[16/11]" />
              <div className="flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-ink-50/70 p-4">
                <Building2 className="size-5 shrink-0 text-brand-600" />
                <p className="text-[0.85rem] leading-relaxed text-ink-700">
                  PODs are hosted by real local organisations — schools, NGOs and trusts. Supporting one of them directly keeps a
                  specific neighbourhood learning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
