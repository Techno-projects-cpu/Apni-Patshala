import { useState } from 'react'
import { ArrowUpRight, BookHeart, Sparkles } from 'lucide-react'
import { Button, Figure, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { OFFICIAL, STORIES } from '../data/site'

export default function Stories() {
  const tags = ['All', ...Array.from(new Set(STORIES.map((s) => s.tag)))]
  const [tag, setTag] = useState('All')
  const visible = tag === 'All' ? STORIES : STORIES.filter((s) => s.tag === tag)

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pt-16 pb-20 lg:pt-24">
        <img src="/media/pod-classroom.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/94 to-ink-950" />
        <div className="shell relative max-w-4xl">
          <Reveal>
            <Pill tone="dark">
              <BookHeart className="size-3.5" />
              Student stories
            </Pill>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 text-[2.4rem] leading-[1.06] font-extrabold text-white sm:text-[3.1rem]">
              Real kids. Real struggles. Real success.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-200">
              Behind every screen is a child who once had no access — and who now builds apps, cracks internships, freelances,
              teaches others and inspires the next kid in line. Apni Pathshala publishes these stories on their own site; here is
              a glimpse of the people behind the numbers.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={OFFICIAL.stories} size="lg" icon={<ArrowUpRight className="size-4.5" />}>
                Read the full stories
              </Button>
              <Button href={OFFICIAL.blog} variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Their blog ↗
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Voices from the PODs"
          title="Nineteen stories, and counting"
          body="Names and headlines are taken from Apni Pathshala’s published student-story series. Every one of them links back to the real thing."
        />

        <Reveal delay={0.08}>
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(t)}
                className={`shrink-0 rounded-full px-4 py-2 text-[0.84rem] font-semibold whitespace-nowrap transition-colors ${
                  tag === t ? 'bg-brand-600 text-white shadow-glow' : 'border border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <Reveal key={s.name + s.line} delay={i * 0.04}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-ink-200/70 bg-gradient-to-br from-white to-ink-50/70 p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <Pill tone="flame">{s.tag}</Pill>
                  <Sparkles className="size-4 text-brand-300" />
                </div>
                <h3 className="mt-5 font-display text-[1.1rem] font-bold">{s.name}</h3>
                <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-ink-600">{s.line}</p>
                <a
                  href={OFFICIAL.stories}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-brand-600 hover:text-brand-700"
                >
                  Read on the official site <ArrowUpRight className="size-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50/70">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Figure src="/media/pod-self-paced.webp" alt="A student concentrating at an Apna PC" ratio="aspect-[4/5]" />
              <Figure src="/media/pod-hands-on.webp" alt="A learner working through a lesson on a POD computer" ratio="aspect-[4/5]" className="mt-8" />
            </div>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="Why it works"
              title="Access is the smallest part of the change"
              body="A computer opens a door. What students do next — asking questions without fear, building things nobody asked them to build, teaching the kid beside them — is what actually shifts a life."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4">
                {[
                  'Self-directed learning instead of textbook recitation.',
                  'Skills that lead to internships, freelancing and real jobs.',
                  'Students who return as mentors, teachers and POD leaders themselves.',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3 rounded-2xl border border-ink-200/70 bg-white p-4">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-flame-500" />
                    <p className="text-[0.92rem] leading-relaxed text-ink-700">{line}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
