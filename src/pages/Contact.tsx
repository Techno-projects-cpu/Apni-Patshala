import { ArrowUpRight, Clock, Mail, MessageCircle, Phone, ShieldAlert, Users } from 'lucide-react'
import { Button, Figure, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { OFFICIAL } from '../data/site'

const CARDS = [
  {
    icon: Mail,
    title: 'Start or join a POD',
    value: OFFICIAL.emailStartPod,
    href: `mailto:${OFFICIAL.emailStartPod}`,
    note: 'Best for applications, eligibility questions and partnership enquiries.',
  },
  {
    icon: Mail,
    title: 'PC & warranty support',
    value: OFFICIAL.emailPcSupport,
    href: `mailto:${OFFICIAL.emailPcSupport}`,
    note: 'For existing PODs needing repairs, replacements or warranty claims.',
  },
  {
    icon: MessageCircle,
    title: 'Phone & WhatsApp',
    value: OFFICIAL.phone,
    href: OFFICIAL.whatsapp,
    note: 'The fastest channel the team publishes publicly.',
  },
  {
    icon: Users,
    title: 'CEO — Sagar Tiwari',
    value: OFFICIAL.emailCeo,
    href: `mailto:${OFFICIAL.emailCeo}`,
    note: 'For partnerships, institutional collaborations and serious programme enquiries.',
  },
]

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
        <div className="shell relative max-w-3xl">
          <Reveal>
            <Pill tone="brand">
              <MessageCircle className="size-3.5" />
              Get in touch
            </Pill>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold sm:text-[3.1rem]">
              Reach the people who actually run this
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-700">
              Whether you want to start or join a POD, need support with a machine, or have feedback and ideas — Apni Pathshala’s
              team is reachable directly. This page simply collects the contact routes they publish on their own website.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={OFFICIAL.startPodForm} size="lg" icon={<ArrowUpRight className="size-4.5" />}>
                Official POD application
              </Button>
              <Button href={OFFICIAL.site} variant="outline" size="lg">
                apnipathshala.org ↗
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="pt-4">
        <div className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="card-hover flex h-full flex-col rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <c.icon className="size-5" />
                </span>
                <h2 className="mt-5 font-display text-[1.08rem] font-bold">{c.title}</h2>
                <p className="mt-1.5 font-semibold text-brand-700">{c.value}</p>
                <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-ink-600">{c.note}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-ink-500">
                  Open <ArrowUpRight className="size-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50/70">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <SectionHead
              eyebrow="POD coordinators"
              title="When a machine breaks, this is who PODs call"
              body="Apni Pathshala lists POD coordinators for technical help and warranty claims on its Contact page. If you run a POD and a device has a problem, start there."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-ink-200/70 bg-white p-5 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-xl bg-flame-50 text-flame-600">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-[1rem] font-bold">Sahilendra Jaiswar</p>
                    <p className="text-[0.88rem] font-semibold text-ink-600">+91 93228 36905</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-ink-200/70 bg-white p-5 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-xl bg-flame-50 text-flame-600">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-[1rem] font-bold">Ashish Dubey</p>
                    <p className="text-[0.88rem] font-semibold text-ink-600">+91 88307 06316</p>
                  </div>
                </div>
                <p className="flex items-start gap-2.5 rounded-2xl bg-white/70 p-4 text-[0.82rem] leading-relaxed text-ink-600">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  Devices carry a 3-year standard warranty. These numbers are published by Apni Pathshala for POD support — please
                  be considerate and only use them for genuine POD matters.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Figure src="/media/pod-white-lab.webp" alt="Rows of students working at Apna PCs in a POD lab" ratio="aspect-[4/3]" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-flame-200 bg-flame-50/70 p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-flame-500 text-white">
                <ShieldAlert className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-[1.3rem] font-bold text-flame-900">
                  Looking for the student who made this page?
                </h2>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-flame-900/90">
                  This concept site is an unofficial, unpaid student project. It has no contact form and collects no data. The
                  best outcome for everyone is simple: if the Apni Pathshala team is reading this — thank you for the work you do,
                  and feel free to take any idea here that’s useful.
                </p>
              </div>
            </div>
            <Button to="/donate" variant="accent" size="lg" className="shrink-0">
              About donations &amp; this project
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
