import Reveal, { Eyebrow } from '../components/Reveal'

const OPENINGS = [
  { role: 'Acquisitions Analyst', location: 'Ohio', type: 'Full-time' },
  { role: 'Software Engineer — AI', location: 'Remote', type: 'Full-time' },
  { role: 'Operations Associate', location: 'New Jersey', type: 'Full-time' },
]

export default function Careers() {
  return (
    <section id="careers" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h2 className="mt-8 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Build things that are meant to last.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60">
            We hire people who think in decades — operators, engineers, and analysts who want
            their work to compound. Small team, real ownership, no bureaucracy.
          </p>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl border border-ink/10 bg-white/60">
          {OPENINGS.map((o, i) => (
            <Reveal key={o.role} delay={i * 0.08}>
              <div className="flex flex-col gap-4 border-b border-ink/10 p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {o.role}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">
                    {o.location} · {o.type}
                  </p>
                </div>
                <a
                  href={`mailto:leasing@raut.com?subject=${encodeURIComponent(
                    `Application — ${o.role} (${o.location})`,
                  )}`}
                  className="flex min-h-11 w-fit items-center rounded-full border border-ink px-7 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Apply
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
