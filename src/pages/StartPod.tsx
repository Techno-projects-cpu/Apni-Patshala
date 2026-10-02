import { ArrowRight, CalendarCheck, CheckCircle2, ClipboardList, FileSignature, Mail, MonitorPlay, Ruler, ShieldCheck, Users } from 'lucide-react'
import { Accordion, Button, Figure, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { OFFICIAL, REQUIREMENTS, START_POD_FACTS, WHAT_YOU_GET } from '../data/site'

const STEPS = [
  {
    icon: Ruler,
    title: 'Get the room ready',
    body: 'A dedicated space of at least 20 ft × 10 ft, tables for ten setups, two sockets per computer and 10 MBPS+ internet.',
  },
  {
    icon: ClipboardList,
    title: 'Apply to Apni Pathshala',
    body: 'Fill their official POD application form. Be honest about your space, your people and why your community needs this.',
  },
  {
    icon: CalendarCheck,
    title: 'Get reviewed',
    body: 'The team reviews hundreds of applications a month and typically approves around one in five. Patience pays here.',
  },
  {
    icon: FileSignature,
    title: 'Sign the MOU and set up',
    body: 'On approval, ten Apna PCs arrive on a 15-month zero-cost lease. You sign an MOU, install the machines and open the doors.',
  },
  {
    icon: Users,
    title: 'Run it and share',
    body: 'Follow the learning plan, mentor your students, send weekly and monthly updates, and lean on the POD community whenever you get stuck.',
  },
]

export default function StartPod() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-ink-950 pt-16 pb-20 lg:pt-24 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-20" />
        <div className="shell relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <Pill tone="dark">
                <MonitorPlay className="size-3.5" />
                Zero cost to you
              </Pill>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-extrabold text-white sm:text-[3.2rem]">
                You bring the room. Apni Pathshala brings the computers.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-brand-50/90">
                Ten PCs, peripherals, curriculum, safety software, an AI study buddy and a mentor for your centre — provided on a
                15-month lease. You never pay Apni Pathshala a rupee, and you’re free to charge your students a fee that stays
                entirely with you.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href={OFFICIAL.startPodForm} size="lg" icon={<ArrowRight className="size-4.5" />}>
                  Apply on the official form
                </Button>
                <Button href={`mailto:${OFFICIAL.emailStartPod}`} variant="ghost" size="lg" className="text-white hover:bg-white/10" icon={<Mail className="size-4.5" />}>
                  {OFFICIAL.emailStartPod}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 max-w-xl text-[0.8rem] leading-relaxed text-brand-100/70">
                This page is a student’s summary of Apni Pathshala’s published programme. The application itself goes directly to
                their team — nothing is submitted through this website.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="grid gap-4">
              <Figure src="/media/apna-pc-handover.webp" alt="Apna PC computers ready to be handed to a new POD" ratio="aspect-[16/11]" priority />
              <div className="grid grid-cols-2 gap-4">
                <Figure src="/media/pod-mentor.webp" alt="A mentor teaching children at a POD" ratio="aspect-[4/3]" />
                <Figure src="/media/pod-girls-ashram.webp" alt="Students learning computers at a government school POD" ratio="aspect-[4/3]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="What you receive"
          title="A complete digital classroom, delivered"
          body="Published on Apni Pathshala’s Contact page as exactly what an approved POD receives, alongside the expectations that come with it."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHAT_YOU_GET.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-ink-200/70 bg-white p-5 text-center shadow-soft card-hover">
                <p className="font-display text-[1.6rem] font-extrabold text-brand-600">{item.count}</p>
                <p className="mt-1 font-display text-[0.95rem] font-bold">{item.label}</p>
                <p className="mt-0.5 text-[0.72rem] font-semibold tracking-wide text-ink-400 uppercase">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-ink-200/70 bg-ink-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <p className="text-[0.9rem] leading-relaxed text-ink-700">
                Devices come with a <strong className="font-semibold">3-year standard warranty</strong> and a POD coordinator for
                support. Nothing is donated — the PCs stay on a renewable 15-month lease.
              </p>
            </div>
            <Button href="https://www.apnipathshala.org/contact-us/" variant="outline" className="shrink-0" icon={<ArrowRight className="size-4" />}>
              Official details
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-ink-50/70">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Checklist"
              title="Before you apply, tick these off"
              body="Apni Pathshala is upfront about what a POD needs on the ground. Being ready on paper makes your application far stronger."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-3xl border border-flame-200 bg-flame-50/70 p-6">
                <p className="font-display text-[1rem] font-bold text-flame-900">A realistic expectation</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-flame-900/90">
                  Applications are competitive — around one in five is approved. A clean, honest application that shows genuine
                  local commitment does better than a vague one.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {REQUIREMENTS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink-200/70 bg-white p-5 shadow-soft">
                  <CheckCircle2 className="size-5 text-brand-600" />
                  <h3 className="mt-3.5 font-display text-[0.98rem] font-bold">{r.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink-600">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="The journey" title="From empty room to running POD" align="center" />
        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-[1.15rem] w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent lg:left-1/2" />
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className={`relative flex gap-6 lg:w-1/2 ${i % 2 === 0 ? 'lg:ml-0 lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-200 lg:absolute lg:top-4 lg:-right-5 lg:size-11">
                    <s.icon className="size-4.5" />
                  </span>
                  <div className={`flex-1 rounded-3xl border border-ink-200/70 bg-white p-5 shadow-soft ${i % 2 === 0 ? '' : ''}`}>
                    <p className="text-[0.72rem] font-bold tracking-[0.16em] text-brand-600 uppercase">Step {i + 1}</p>
                    <h3 className="mt-2 font-display text-[1.05rem] font-bold">{s.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-600">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-ink-50/70">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead eyebrow="Honest answers" title="Everything a first-time POD leader asks" />
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-200/70 bg-white px-6 py-2 shadow-soft">
              <Accordion items={START_POD_FACTS} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-200/70 bg-gradient-to-br from-white via-brand-50/60 to-flame-50 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-[1.9rem] leading-tight font-extrabold sm:text-[2.4rem]">
                Ready to open a POD? Talk to the team who actually runs this.
              </h2>
              <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-ink-700">
                Applications, approvals, computers and support all come from Apni Pathshala — not from this concept site. Their
                team replies fastest on email and WhatsApp.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={OFFICIAL.startPodForm} size="lg" icon={<ArrowRight className="size-4.5" />}>
                  Open the official application
                </Button>
                <Button href={OFFICIAL.whatsapp} variant="outline" size="lg">
                  WhatsApp {OFFICIAL.phone}
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-ink-200/60 backdrop-blur">
              <p className="text-[0.76rem] font-bold tracking-[0.16em] text-ink-500 uppercase">Straight to the source</p>
              <ul className="mt-4 space-y-3 text-[0.9rem]">
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 text-brand-600" />
                  <a href={`mailto:${OFFICIAL.emailStartPod}`} className="font-semibold text-ink-800 hover:text-brand-700">
                    {OFFICIAL.emailStartPod}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 text-brand-600" />
                  <a href={`mailto:${OFFICIAL.emailPcSupport}`} className="font-semibold text-ink-800 hover:text-brand-700">
                    {OFFICIAL.emailPcSupport}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <ArrowRight className="size-4 text-brand-600" />
                  <a href={OFFICIAL.site} target="_blank" rel="noreferrer noopener" className="font-semibold text-ink-800 hover:text-brand-700">
                    apnipathshala.org ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
