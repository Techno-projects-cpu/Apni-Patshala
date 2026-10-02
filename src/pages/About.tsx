import { ArrowUpRight, Building2, Globe2, GraduationCap, HeartHandshake, Quote, Target, Users } from 'lucide-react'
import { Button, Figure, Marquee, Pill, Reveal, Section, SectionHead } from '../components/ui'
import { PARTNERS, STATES, TEAM } from '../data/site'

const TEAM_PHOTO: Record<string, string | undefined> = {
  'Dr. Aniruddha Malpani': '/media/founder-portrait.webp',
}

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
}

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-50 [mask-image:radial-gradient(60%_50%_at_30%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-flame-100/60 blur-3xl" />
        <div className="shell relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Pill tone="brand">
                <Users className="size-3.5" />
                About the initiative
              </Pill>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold sm:text-[3.2rem]">
                Reimagining education for every Indian learner
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-700">
                Apni Pathshala is a not-for-profit initiative working on a simple belief: if learning is community-run, digital-first
                and free of the usual gatekeeping, a child’s postcode stops deciding their future.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-700">
                Instead of building one big institution, the team helps hundreds of small ones come alive — each led by someone who
                already belongs to that community.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/start-a-pod" size="lg" icon={<ArrowUpRight className="size-4.5" />}>
                  Start a POD
                </Button>
                <Button to="/donate" variant="outline" size="lg" icon={<HeartHandshake className="size-4.5" />}>
                  Support the real team
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="grid gap-4">
              <Figure src="/media/pod-hero-wide.webp" alt="A wide view of students learning at Apna PCs in a POD" ratio="aspect-[16/10]" priority />
              <div className="grid grid-cols-2 gap-4">
                <Figure src="/media/team-celebration.webp" alt="Apni Pathshala team members celebrating together" ratio="aspect-[4/3]" />
                <Figure src="/media/pod-session.webp" alt="A mentor and students working together at computers during a POD session" ratio="aspect-[4/3]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-ink-50/70">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-ink-200/70 bg-white p-8 shadow-soft sm:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-glow">
                <Target className="size-6" />
              </span>
              <h2 className="mt-6 font-display text-[1.5rem] font-extrabold sm:text-[1.8rem]">The mission</h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">
                To give learning opportunities to every child through PODs across India — aiming for 1,000+ PODs and 1.5 lakh+
                students, by setting up community-run digital learning centres and backing them with hardware, software,
                curriculum and mentorship.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-4 border-t border-ink-100 pt-6">
                {[
                  { k: '1,000+', v: 'PODs targeted' },
                  { k: '1.5 lakh+', v: 'students to reach' },
                  { k: '3 years', v: 'to do it' },
                ].map((s) => (
                  <div key={s.k}>
                    <p className="font-display text-[1.2rem] font-extrabold text-ink-950">{s.k}</p>
                    <p className="mt-1 text-[0.76rem] font-semibold text-ink-500">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[2rem] border border-ink-200/70 bg-white p-8 shadow-soft sm:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-flame-500 text-white">
                <GraduationCap className="size-6" />
              </span>
              <h2 className="mt-6 font-display text-[1.5rem] font-extrabold sm:text-[1.8rem]">The vision</h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">
                To give every child in India access to modern, inclusive education through local PODs, digital tools and mentorship
                — nurturing curiosity, creativity and lifelong opportunity regardless of background.
              </p>
              <blockquote className="mt-7 rounded-2xl border-l-4 border-flame-500 bg-flame-50/60 p-5">
                <Quote className="size-4 text-flame-500" />
                <p className="mt-2 text-[0.92rem] leading-relaxed font-medium text-ink-800 italic">
                  “Transform education, empower students.”
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <Figure src="/media/founder.webp" alt="Dr. Aniruddha Malpani, founder of Apni Pathshala, at his desk" ratio="aspect-[5/4]" />
          </Reveal>
          <div>
            <SectionHead
              eyebrow="From the founder"
              title="“A computer alone was never the answer. A community around it is.”"
              body="Dr. Aniruddha Malpani founded Apni Pathshala with a vision of making digital learning accessible to every child, combining technology, community participation and practical education so students can build skills, confidence and better opportunities for the future."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="https://x.com/malpani" variant="outline" icon={<ArrowUpRight className="size-4" />}>
                  Dr. Malpani on X
                </Button>
                <Button href="https://www.instagram.com/dranmalpani/" variant="ghost" icon={<ArrowUpRight className="size-4" />}>
                  Instagram
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-950">
        <SectionHead
          eyebrow="The team"
          title="The people behind the PODs"
          body="Roles and bios as published on Apni Pathshala’s About page and public profiles. Support the real humans doing this work — this concept site is only a tribute."
          tone="dark"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]">
                {TEAM_PHOTO[member.name] ? (
                  <img
                    src={TEAM_PHOTO[member.name]}
                    alt={member.name}
                    loading="lazy"
                    className="size-16 rounded-2xl object-cover object-top ring-2 ring-white/15"
                  />
                ) : (
                  <span className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 font-display text-[1.4rem] font-extrabold text-white">
                    {initials(member.name)}
                  </span>
                )}
                <h3 className="mt-5 font-display text-[1.1rem] font-bold text-white">{member.name}</h3>
                <p className="mt-0.5 text-[0.8rem] font-semibold tracking-wide text-brand-300 uppercase">{member.role}</p>
                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-ink-300">{member.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {Object.entries(member.links).map(([key, url]) => (
                    <a
                      key={key}
                      href={url as string}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-white/15 px-3 py-1.5 text-[0.72rem] font-semibold text-ink-200 capitalize transition-colors hover:border-brand-400/60 hover:text-white"
                    >
                      {key} ↗
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.16em] text-brand-300 uppercase">
              <Globe2 className="size-3.5" /> The tech team
            </p>
            <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-ink-300">
              Apni Pathshala’s tech team builds and manages the digital systems that support student learning, POD operations and
              organisational growth — developing reliable software, improving user experience, solving technical issues and
              connecting their platforms into one smooth ecosystem.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Partners &amp; reach"
          title="This works because local organisations say yes"
          body="Schools, NGOs, trusts and social welfare societies host and run PODs in their own neighbourhoods. Apni Pathshala publishes them openly."
        />
        <Reveal delay={0.1}>
          <div className="mt-9">
            <Marquee items={PARTNERS} />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-3xl border border-ink-200/70 bg-ink-50/60 p-6 sm:p-8">
            <p className="flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.16em] text-ink-500 uppercase">
              <Building2 className="size-3.5 text-brand-600" /> States &amp; UTs on Apni Pathshala’s POD directory
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {STATES.map((s) => (
                <span key={s} className="rounded-xl border border-ink-200 bg-white px-3 py-1.5 text-[0.78rem] font-semibold text-ink-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
