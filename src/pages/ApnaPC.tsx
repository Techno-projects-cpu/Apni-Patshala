import { ArrowRight, Box, Cpu, Layers, MonitorPlay, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import { Accordion, Button, Figure, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { APNA_PC, CREATIVE_TOOLS, FAQ, SOFTWARE } from '../data/site'

export default function ApnaPC() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-[30rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Pill tone="brand">
                <Cpu className="size-3.5" />
                The hardware behind every POD
              </Pill>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold sm:text-[3.2rem]">
                Apna PC — a computer, and a whole classroom inside it
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-700">{APNA_PC.intro}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/start-a-pod" size="lg" icon={<ArrowRight className="size-4.5" />}>
                  Get Apna PCs for your POD
                </Button>
                <Button href="https://www.apnipathshala.org/apna-pc/" variant="outline" size="lg">
                  Official specs ↗
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                {[
                  { icon: ShieldCheck, k: '3-year', v: 'warranty' },
                  { icon: Wrench, k: 'Zero', v: 'cost to POD' },
                  { icon: MonitorPlay, k: '19"', v: 'new monitor' },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-ink-200/70 bg-white p-4 shadow-soft">
                    <s.icon className="size-4.5 text-brand-600" />
                    <p className="mt-3 font-display text-[1.15rem] font-extrabold">{s.k}</p>
                    <p className="text-[0.76rem] font-semibold text-ink-500">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="grid gap-4">
              <Figure src="/media/apna-pc-handover.webp" alt="Apna PC computers being handed over to a partner organisation" ratio="aspect-[16/11]" priority />
              <div className="grid grid-cols-2 gap-4">
                <Figure src="/media/apna-pc-kids.webp" alt="Children using Apna PC computers in a learning centre" ratio="aspect-[4/3]" />
                <Figure src="/media/pod-lab-wide.webp" alt="Multiple Apna PC workstations set up in a POD" ratio="aspect-[4/3]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-ink-50/70">
        <SectionHead
          eyebrow="Why they built it"
          title="The gap wasn’t computers. It was everything around them."
          body="Apni Pathshala’s own explanation of why a device alone was never going to fix digital learning."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {APNA_PC.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft">
                <span className="grid size-9 place-items-center rounded-xl bg-flame-50 font-display text-[0.8rem] font-extrabold text-flame-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-[1rem] font-bold">{w.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-600">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Under the hood" title="Specifications, exactly as published" />
            <Reveal delay={0.1}>
              <dl className="mt-8 overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft">
                {APNA_PC.cpu.map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-6 border-b border-ink-100 px-5 py-4 last:border-0">
                    <dt className="text-[0.85rem] font-semibold tracking-wide text-ink-500 uppercase">{row.k}</dt>
                    <dd className="text-right text-[0.95rem] font-semibold text-ink-900">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink-200/70 bg-white p-5">
                  <p className="flex items-center gap-2 text-[0.8rem] font-bold tracking-wide text-ink-500 uppercase">
                    <Layers className="size-3.5 text-brand-600" /> Ports (front)
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[0.88rem] text-ink-700">
                    {APNA_PC.portsFront.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-ink-200/70 bg-white p-5">
                  <p className="flex items-center gap-2 text-[0.8rem] font-bold tracking-wide text-ink-500 uppercase">
                    <Layers className="size-3.5 text-brand-600" /> Ports (back)
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[0.88rem] text-ink-700">
                    {APNA_PC.portsBack.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHead eyebrow="In the box" title="Ready for learning, right out of the box" />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3">
                {APNA_PC.inBox.map((item, i) => (
                  <li key={item} className="flex items-start gap-3.5 rounded-2xl border border-ink-200/70 bg-white p-4 shadow-soft">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <Box className="size-4" />
                    </span>
                    <span className="text-[0.92rem] leading-relaxed font-medium text-ink-800">{item}</span>
                    <span className="ml-auto text-[0.72rem] font-bold text-ink-300">{String(i + 1).padStart(2, '0')}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 rounded-2xl border border-flame-200 bg-flame-50/70 p-5 text-[0.85rem] leading-relaxed text-flame-900">
                <strong className="font-semibold">Important:</strong> Apna PCs are not donated. They are provided on a 15-month
                zero-cost lease under a signed MOU, with a 3-year standard warranty, and the lease is renewed to keep using them.
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-950">
        <SectionHead
          eyebrow="Software ecosystem"
          title="What students actually see when they sit down"
          body="Apni Pathshala’s software stack is designed around safety, self-learning and teacher-less classrooms."
          tone="dark"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOFTWARE.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]">
                <Sparkles className="size-5 text-flame-400" />
                <h3 className="mt-4 font-display text-[1.05rem] font-bold text-white">{s.name}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-300">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-[0.78rem] font-bold tracking-[0.16em] text-brand-300 uppercase">Plus the creative toolkit</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {CREATIVE_TOOLS.map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.85rem] font-semibold text-white">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-[0.88rem] leading-relaxed text-ink-400">
              Coding, 3D modelling, electronics, audio editing and office work — all free and open-source, all pre-installed so a
              POD never has to buy software.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHead eyebrow="Good to know" title="Practical questions about the machines" />
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-200/70 bg-white px-6 py-2 shadow-soft">
              <Accordion items={FAQ.slice(4)} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 p-8 sm:p-12">
          <div className="pointer-events-none absolute -top-20 -right-10 size-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-2xl text-[1.9rem] leading-tight font-extrabold text-white sm:text-[2.3rem]">
                Ten of these can change a street. Want to set one up?
              </h2>
              <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-brand-50/90">
                Applications are reviewed by the Apni Pathshala team — roughly one in five is approved. This concept site simply
                shows you what to expect before you apply.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button to="/start-a-pod" variant="white" size="lg" icon={<ArrowRight className="size-4.5" />}>
                Start a POD
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
