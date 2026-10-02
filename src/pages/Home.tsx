import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Cpu,
  GraduationCap,
  Globe2,
  Layers,
  MapPin,
  MonitorPlay,
  Quote,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import {
  Accordion,
  Button,
  Counter,
  Figure,
  Marquee,
  Pill,
  Reveal,
  Section,
  SectionHead,
} from '../components/ui'
import { FAQ, HEART, HERO, MISSION, PARTNERS, PODS, POD_EXPLAINER, SOFTWARE, STATS, STORIES, STATES } from '../data/site'

const featureIcons = {
  monitor: MonitorPlay,
  users: Users,
  sparkles: Sparkles,
  share: Share2,
} as const

const heartIcons = {
  cpu: Cpu,
  globe: Globe2,
  shield: ShieldCheck,
  layers: Layers,
  graduation: GraduationCap,
} as const

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-40 -right-24 size-[34rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-32 size-[26rem] rounded-full bg-flame-100/60 blur-3xl" />

        <div className="shell relative grid items-center gap-14 pt-16 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pt-24 lg:pb-28">
          <div>
            <Reveal>
              <Pill tone="brand">
                <Sparkles className="size-3.5" />
                {HERO.eyebrow}
              </Pill>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-extrabold sm:text-[3.4rem] lg:text-[4rem]">
                Digital learning for <span className="text-gradient">every child</span>, in every corner of India.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-ink-700">{HERO.body}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button to="/start-a-pod" size="lg" icon={<ArrowRight className="size-4.5 transition-transform group-hover:translate-x-0.5" />}>
                  Start a POD
                </Button>
                <Button to="/donate" size="lg" variant="outline">
                  Want to donate? Read this first
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-[1.9rem] leading-none font-extrabold text-ink-950">
                      <Counter to={s.value} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-2 text-[0.8rem] leading-snug font-semibold text-ink-600">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={26}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/12 via-transparent to-flame-500/15 blur-xl" />
              <Figure
                src="/media/hero-pod.webp"
                alt="Two students in school uniforms learning together at an Apni Pathshala POD computer"
                ratio="aspect-[4/5]"
                className="relative rounded-[2rem] ring-1 ring-ink-950/5"
                priority
              />
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 w-[15rem] rounded-2xl border border-ink-100 bg-white p-4 shadow-lift sm:-left-8"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <MonitorPlay className="size-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-[0.95rem] font-bold text-ink-950">10+ Apna PCs</p>
                    <p className="text-[0.72rem] text-ink-500">in every learning POD</p>
                  </div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '86%' }}
                    transition={{ delay: 0.9, duration: 1.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-600 to-flame-500"
                  />
                </div>
                <p className="mt-2 text-[0.72rem] font-medium text-ink-600">No cost to the POD. Ever.</p>
              </motion.div>
              <div className="absolute -top-5 -right-2 hidden rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-lift sm:block">
                <p className="text-[0.7rem] font-semibold tracking-wide text-ink-500 uppercase">Reach</p>
                <p className="font-display text-[1.15rem] font-extrabold text-ink-950">20+ States &amp; UTs</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* states ticker */}
        <div className="relative border-y border-ink-100 bg-ink-50/60 py-4">
          <div className="shell flex items-center gap-4">
            <span className="hidden shrink-0 items-center gap-2 text-[0.76rem] font-bold tracking-[0.14em] text-ink-500 uppercase sm:flex">
              <MapPin className="size-3.5 text-flame-500" /> Where PODs run
            </span>
            <div className="min-w-0 flex-1">
              <Marquee items={STATES} />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- mission */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHead eyebrow={MISSION.eyebrow} title={MISSION.title} body={MISSION.body} />
            <Reveal delay={0.15}>
              <blockquote className="mt-8 rounded-3xl border-l-4 border-flame-500 bg-flame-50/60 p-6">
                <Quote className="size-5 text-flame-500" />
                <p className="mt-3 text-[1rem] leading-relaxed font-medium text-ink-800 italic">{MISSION.note}</p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/about" variant="outline" icon={<ArrowRight className="size-4" />}>
                  Meet the team behind it
                </Button>
                <Button to="/pods" variant="ghost" icon={<ArrowRight className="size-4" />}>
                  See how PODs work
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <Figure
                src="/media/pod-mentor.webp"
                alt="A mentor guiding young students at computers inside a community learning POD"
                ratio="aspect-[4/3]"
                className="col-span-2"
              />
              <Figure src="/media/pod-flags.webp" alt="Students at computers in an Apni Pathshala POD decorated with Indian flags" ratio="aspect-square" />
              <Figure src="/media/pod-self-paced.webp" alt="A student practising independently on a computer at a POD" ratio="aspect-square" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- pod */}
      <Section className="relative overflow-hidden bg-ink-50/70">
        <div className="pointer-events-none absolute -top-24 right-0 size-[24rem] rounded-full bg-brand-100/60 blur-3xl" />
        <SectionHead eyebrow={POD_EXPLAINER.eyebrow} title={POD_EXPLAINER.title} body={POD_EXPLAINER.body} align="center" />
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[1.02rem] leading-relaxed text-ink-600">{POD_EXPLAINER.body2}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POD_EXPLAINER.features.map((f, i) => {
            const Icon = featureIcons[f.icon as keyof typeof featureIcons]
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="card-hover h-full rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-glow">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.05rem] font-bold">{f.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-600">{f.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <Figure src="/media/pod-classroom.webp" alt="A busy POD classroom with students learning on computers" caption="A full POD session in progress" ratio="aspect-[4/3]" className="sm:col-span-2" />
            <Figure src="/media/pod-lab-wide.webp" alt="Rows of Apna PC computers set up in a learning POD" caption="Rows of Apna PCs, ready to learn" ratio="aspect-[4/3]" />
          </div>
        </Reveal>
      </Section>

      {/* ----------------------------------------------------------- HEART */}
      <Section className="relative overflow-hidden bg-ink-950">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-20" />
        <div className="pointer-events-none absolute -top-32 left-1/3 size-[30rem] rounded-full bg-brand-600/20 blur-3xl" />
        <div className="relative">
          <SectionHead
            eyebrow="The HEART framework"
            title="Five things every POD is built on"
            body="Apni Pathshala describes its support system as HEART — here is what that means in practice for a POD leader."
            tone="dark"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {HEART.map((pillar, i) => {
              const Icon = heartIcons[pillar.icon as keyof typeof heartIcons]
              const wide = pillar.key === 'Training & Mentorship'
              return (
                <Reveal key={pillar.key} delay={i * 0.06} className={wide ? 'lg:col-span-2' : ''}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-brand-300">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-display text-[1.15rem] font-bold text-white">{pillar.key}</h3>
                    </div>
                    <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-300">{pillar.body}</p>
                    <ul className={`mt-5 space-y-2.5 ${wide ? 'sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0' : ''}`}>
                      {pillar.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-ink-200">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-flame-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/start-a-pod" variant="white" size="lg" icon={<ArrowRight className="size-4.5" />}>
                See if you qualify
              </Button>
              <p className="text-[0.85rem] text-ink-400">
                Curious what’s inside the machine?{' '}
                <Link to="/apna-pc" className="font-semibold text-brand-300 underline underline-offset-2 hover:text-brand-200">
                  Meet Apna PC
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------- software */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <Reveal>
            <Figure src="/media/apna-pc-banner.webp" alt="A student using an Apna PC to learn" ratio="aspect-[16/11]" />
          </Reveal>
          <div>
            <SectionHead
              eyebrow="Software that does the teaching"
              title="A classroom in a box — safe, offline-capable, self-paced"
              body="Every Apna PC ships with an ecosystem of free software so a POD can run structured, measurable and safe digital classrooms from day one."
            />
            <div className="mt-9 space-y-3">
              {SOFTWARE.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <div className="flex gap-4 rounded-2xl border border-ink-200/70 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/40">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 font-display text-[0.8rem] font-extrabold text-brand-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-[0.98rem] font-bold">{s.name}</h3>
                      <p className="mt-0.5 text-[0.875rem] leading-relaxed text-ink-600">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- pods */}
      <Section className="bg-ink-50/70">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead
            eyebrow="Real PODs, real places"
            title="Live centres from Nagaland to Karnataka"
            body="A handful of the PODs listed publicly on Apni Pathshala’s website. Each one is run by a local leader who decided their community deserved better access."
          />
          <Reveal delay={0.1}>
            <Button to="/pods" variant="outline" size="lg" icon={<ArrowRight className="size-4.5" />}>
              Browse all PODs
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PODS.slice(0, 6).map((pod, i) => (
            <Reveal key={pod.name} delay={i * 0.05}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-ink-200/70 bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <Pill tone={pod.status === 'Active' ? 'green' : 'ink'}>
                    <span className={`size-1.5 rounded-full ${pod.status === 'Active' ? 'bg-emerald-500' : 'bg-ink-400'}`} />
                    {pod.status}
                  </Pill>
                  <Pill tone="brand">
                    <MapPin className="size-3" />
                    {pod.state}
                  </Pill>
                </div>
                <h3 className="mt-4 font-display text-[1.08rem] leading-snug font-bold">{pod.name}</h3>
                <p className="mt-2 text-[0.85rem] text-ink-500">
                  POD in-charge · <span className="font-semibold text-ink-700">{pod.lead}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------- stories */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Student stories"
              title="Behind every screen is a child who once had no access"
              body="Apni Pathshala publishes story after story of students who went from never touching a computer to cracking internships, freelancing, teaching and building apps."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/stories" size="lg" icon={<ArrowRight className="size-4.5" />}>
                  Read the stories
                </Button>
                <Button to="/donate" variant="outline" size="lg">
                  I want to help
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {STORIES.slice(0, 4).map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-ink-200/70 bg-gradient-to-br from-white to-ink-50/80 p-5 shadow-soft">
                  <Pill tone="flame">{s.tag}</Pill>
                  <h3 className="mt-4 font-display text-[1.05rem] font-bold">{s.name}</h3>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-600">{s.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- student's note */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-flame-50 p-8 sm:p-12">
          <div className="pointer-events-none absolute -top-16 -right-10 size-64 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <p className="eyebrow text-brand-700">
                <span className="inline-block h-1.5 w-8 rounded-full bg-brand-600/40" />
                A note from the student who built this
              </p>
              <h2 className="mt-5 text-[1.9rem] leading-tight font-extrabold sm:text-[2.4rem]">
                Hi Apni Pathshala — I made this because your work deserves a website this good.
              </h2>
              <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-ink-700">
                <p>
                  I’m a student learning web design and development. I came across your PODs, read the student stories, and
                  honestly could not stop thinking about how much of it gets lost inside a cluttered website. So I rebuilt the
                  whole experience — modern layout, faster pages, real photos from your own site, and wording that respects the
                  reader.
                </p>
                <p>
                  No one asked me to. No one paid me. There’s no logo with my name on it and not a single rupee is collected
                  here. If any of this is useful to you — a section, a phrasing, a colour, even just the structure — please take
                  it. I’d be genuinely happy if this turns into a conversation, a volunteer contribution, or an internship.
                </p>
                <p className="font-semibold text-ink-900">
                  And if you’re a visitor who wanted to donate: thank you, but please contact their real team — there is no way
                  to give money through this page, by design.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/donate" size="lg" icon={<ArrowRight className="size-4.5" />}>
                  Donate the right way
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Official contact details
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { k: 'Made by', v: 'One student, after college hours' },
                { k: 'Purpose', v: 'Design practice + a pitch to the team' },
                { k: 'Money involved', v: 'None, anywhere, at all' },
                { k: 'Content', v: 'Transcribed from their public pages' },
                { k: 'If this helps them', v: 'Take it — genuinely, take it' },
              ].map((row, i) => (
                <Reveal key={row.k} delay={i * 0.05}>
                  <div className="flex items-baseline justify-between gap-6 rounded-2xl border border-ink-200/70 bg-white/85 px-5 py-4 backdrop-blur">
                    <span className="text-[0.78rem] font-bold tracking-wide text-ink-500 uppercase">{row.k}</span>
                    <span className="text-right text-[0.92rem] font-semibold text-ink-900">{row.v}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- partners */}
      <Section className="bg-white pt-0">
        <div className="rounded-3xl border border-ink-200/70 bg-ink-50/60 p-8 sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-brand-600">
                <span className="inline-block h-1.5 w-8 rounded-full bg-brand-600/35" />
                Partners &amp; partner PODs
              </p>
              <h2 className="mt-3 font-display text-[1.6rem] font-extrabold sm:text-[2rem]">
                Built with schools, NGOs and trusts across India
              </h2>
            </div>
            <p className="max-w-sm text-[0.88rem] text-ink-600">
              Apni Pathshala teams up with local organisations who already have trust in their community. These are some of the
              names published on their site.
            </p>
          </div>
          <div className="mt-8">
            <Marquee items={PARTNERS} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------- faq */}
      <Section className="bg-ink-50/70">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Straight answers" title="Questions people ask first" />
            <Reveal delay={0.12}>
              <p className="mt-6 rounded-2xl border border-ink-200 bg-white p-5 text-[0.88rem] leading-relaxed text-ink-600">
                This is an <strong className="font-semibold text-ink-900">unofficial student redesign</strong>. Nothing here is a
                transaction. Everything factual has been transcribed from Apni Pathshala’s own public pages — please verify
                anything important at their website.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-200/70 bg-white px-6 py-2 shadow-soft">
              <Accordion items={FAQ} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------- cta */}
      <section className="relative overflow-hidden">
        <img src="/media/cta-bg.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-brand-900/90 to-brand-800/80" />
        <div className="shell relative py-20 text-center lg:py-24">
          <Reveal>
            <p className="eyebrow justify-center text-brand-200">
              <span className="inline-block h-1.5 w-8 rounded-full bg-brand-300/50" />
              Start small. Change everything.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-5 max-w-3xl text-[2.1rem] leading-tight font-extrabold text-white sm:text-[2.9rem]">
              Open a POD in your area and light up young minds.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-brand-50/90">
              You bring the room, the electricity, the internet and the commitment. Apni Pathshala brings the computers, the
              software, the curriculum and the mentorship — at no cost to you.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/start-a-pod" variant="white" size="lg" icon={<ArrowRight className="size-4.5" />}>
                Start a POD
              </Button>
              <Button to="/contact" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Talk to a human
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mx-auto mt-8 max-w-xl text-[0.8rem] leading-relaxed text-brand-100/70">
              Reminder: this page is a student’s concept site. Applications and donations go through the official Apni Pathshala
              team, not through this website.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
