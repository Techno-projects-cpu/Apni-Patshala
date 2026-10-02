import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HandHeart,
  HeartHandshake,
  MapPin,
  MonitorPlay,
  Quote,
  School,
  UserRound,
} from 'lucide-react'
import { Button, Figure, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { PODS, STATES } from '../data/site'

const KEY_FEATURES = [
  {
    title: '10+ Apna PCs',
    body: 'Pre-installed with educational software, learning tools, AI support and open-source skill-based content.',
    icon: MonitorPlay,
  },
  {
    title: 'Run by local leaders',
    body: 'Passionate individuals, NGOs or educators who want to create impact in their own community.',
    icon: UserRound,
  },
  {
    title: 'A learning environment',
    body: 'Students explore, ask questions, lead and practise real-world skills — not just read theory.',
    icon: School,
  },
  {
    title: 'Community reach',
    body: 'PODs share their work and progress with the wider community and learn from each other.',
    icon: Building2,
  },
]

const WHO = ['Teachers', 'NGOs', 'Youth volunteers', 'Retired professionals', 'Concerned parents', 'Former students']

export default function Pods() {
  const [state, setState] = useState<string>('All')
  const available = ['All', ...Array.from(new Set(PODS.map((p) => p.state)))]
  const visible = state === 'All' ? PODS : PODS.filter((p) => p.state === state)

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <img src="/media/pod-hero-wide.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/92 to-ink-950" />
        <div className="shell relative">
          <Reveal>
            <Pill tone="dark">
              <MapPin className="size-3.5" />
              Points of Digital Learning
            </Pill>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl text-[2.4rem] leading-[1.06] font-extrabold text-white sm:text-[3.2rem] lg:text-[3.6rem]">
              A POD is a small room that changes what a whole neighbourhood believes is possible.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[1.04rem] leading-relaxed text-ink-200">
              Apni Pathshala calls it a Point of Digital Learning. Students just call it the place where they finally get to use
              a computer. Either way, it is a community-run centre with Apna PCs, a self-paced curriculum and a local leader who
              refuses to let access be the reason a child falls behind.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/start-a-pod" size="lg" icon={<ArrowRight className="size-4.5" />}>
                Start a POD
              </Button>
              <Button href="https://www.apnipathshala.org/pods/" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                See official POD list ↗
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Key features"
              title="What every POD comes with"
              body="Straight from Apni Pathshala’s own description of the programme — no embellishment added."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {KEY_FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-ink-200/70 bg-white p-5 shadow-soft card-hover">
                    <f.icon className="size-5 text-brand-600" />
                    <h3 className="mt-4 font-display text-[1rem] font-bold">{f.title}</h3>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-600">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <Figure src="/media/pod-hands-on.webp" alt="Student working on a computer with headphones at a POD" ratio="aspect-square" />
              <Figure src="/media/pod-girls-ashram.webp" alt="Girls from a government ashram school learning on computers" ratio="aspect-square" />
              <Figure src="/media/pod-collage.webp" alt="A collage of POD classrooms shared by Apni Pathshala" ratio="aspect-[16/10]" className="col-span-2" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink-50/70">
        <SectionHead
          eyebrow="Who can start one"
          title="You do not need a degree, a company or a campus"
          body="If you have a safe space, basic electricity, an internet connection and the passion to teach or lead change, the team wants to hear from you."
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {WHO.map((w, i) => (
            <Reveal key={w} delay={i * 0.04}>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-3 text-[0.92rem] font-semibold text-ink-800 shadow-soft">
                <CheckCircle2 className="size-4 text-brand-600" />
                {w}
              </span>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-4 border-brand-600 bg-white p-6 shadow-soft">
            <Quote className="size-5 text-brand-600" />
            <p className="mt-3 text-[1rem] leading-relaxed font-medium text-ink-800">
              “PODs can be started by tuition teachers, NGOs, youth volunteers, retired professionals, concerned parents — even
              former students. We provide the hardware, framework and ongoing support; you bring the commitment.”
            </p>
            <p className="mt-3 text-[0.8rem] font-semibold tracking-wide text-ink-500 uppercase">— Apni Pathshala, on their site</p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="The POD directory"
            title="Real centres, published publicly"
            body="These PODs appear on Apni Pathshala’s own POD directory. Filter by state to see how far this network already reaches."
          />
          <p className="text-[0.82rem] text-ink-500 lg:max-w-[16rem]">
            Showing {visible.length} of {PODS.length} listed PODs. The full, live directory lives on the official website.
          </p>
        </div>

        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
            {available.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setState(s)}
                className={`shrink-0 rounded-full px-4 py-2 text-[0.84rem] font-semibold whitespace-nowrap transition-colors ${
                  state === s ? 'bg-brand-600 text-white shadow-glow' : 'border border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((pod, i) => (
            <Reveal key={pod.name} delay={i * 0.04}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <Pill tone={pod.status === 'Active' ? 'green' : 'ink'}>
                    <span className={`size-1.5 rounded-full ${pod.status === 'Active' ? 'bg-emerald-500' : 'bg-ink-400'}`} />
                    {pod.status}
                  </Pill>
                  <Pill tone="brand">
                    <MapPin className="size-3" />
                    {pod.state}
                  </Pill>
                </div>
                <h3 className="mt-5 font-display text-[1.12rem] leading-snug font-bold">{pod.name}</h3>
                <p className="mt-2 text-[0.85rem] text-ink-500">
                  POD in-charge · <span className="font-semibold text-ink-700">{pod.lead}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Figure src="/media/pod-room-colorful.webp" alt="A colourful POD room filled with students" ratio="aspect-[4/3]" />
            <Figure src="/media/pod-white-lab.webp" alt="Rows of students working at computers in a POD lab" ratio="aspect-[4/3]" />
            <Figure src="/media/pod-peer-learning.webp" alt="Two students learning together at one computer" ratio="aspect-[4/3]" />
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 rounded-[2rem] border border-ink-200/70 bg-gradient-to-br from-brand-50 via-white to-flame-50 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Pill tone="flame">
              <HeartHandshake className="size-3.5" />
              Adopt a POD
            </Pill>
            <h2 className="mt-5 text-[1.9rem] leading-tight font-extrabold sm:text-[2.4rem]">
              Sponsor a digital classroom instead of a single laptop
            </h2>
            <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-ink-700">
              Apni Pathshala’s POD Adoption Program lets anyone support an entire learning centre — computers, peripherals,
              curriculum and mentorship — so underprivileged students get sustained digital learning rather than a one-off gift.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="https://www.apnipathshala.org/pods/" size="lg" icon={<ArrowRight className="size-4.5" />}>
                Read about adoption
              </Button>
              <Button to="/donate" variant="outline" size="lg" icon={<HandHeart className="size-4.5" />}>
                How to give safely
              </Button>
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-ink-200/60 backdrop-blur">
              <p className="font-display text-[1.05rem] font-bold">States with PODs on record</p>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-600">
                Apni Pathshala lists PODs across these states and union territories on its directory.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {STATES.slice(0, 18).map((s) => (
                  <span key={s} className="rounded-lg bg-ink-50 px-2.5 py-1 text-[0.72rem] font-semibold text-ink-700">
                    {s}
                  </span>
                ))}
                <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-[0.72rem] font-semibold text-brand-700">
                  + {STATES.length - 18} more
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
