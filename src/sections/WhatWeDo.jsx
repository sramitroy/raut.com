import Reveal, { Eyebrow } from '../components/Reveal'

const PILLARS = [
  {
    title: 'Real Estate Investment',
    blurb: 'Durable residential and commercial assets, held for the long term.',
    bullets: [
      'Acquisitions across OH, NJ & PA',
      'Conservative, data-driven underwriting',
      'Long-hold portfolio management',
      'Hands-on asset stewardship',
    ],
  },
  {
    title: 'Technology & AI',
    blurb: 'Software and AI systems built in-house to run what we own.',
    bullets: [
      'AI-driven operations automation',
      'Property management tooling',
      'Data platforms & analytics',
      'Products born from real operating needs',
    ],
  },
  {
    title: 'Business Operations',
    blurb: 'Back-office excellence for our companies and select partners.',
    bullets: [
      'Property & tenant operations',
      'Finance and administrative services',
      'Vendor & maintenance coordination',
      'Process design that scales',
    ],
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow dark>What We Do</Eyebrow>
          <h2 className="mt-8 max-w-3xl font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Three disciplines. One operating philosophy.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-paper/10 bg-white/5 p-8 transition-colors hover:border-paper/25 sm:p-10">
                <p className="font-display text-4xl font-extrabold text-paper/20">
                  0{i + 1}
                </p>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-paper">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{p.blurb}</p>
                <ul className="mt-8 space-y-3 border-t border-paper/10 pt-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-paper/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
