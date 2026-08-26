import Reveal, { Eyebrow } from '../components/Reveal'

const STATS = [
  { value: '03', label: 'Disciplines', note: 'Real estate, technology, operations' },
  { value: '03', label: 'States', note: 'Ohio · New Jersey · Pennsylvania' },
  { value: '∞', label: 'Long horizon', note: 'Decades, not quarters' },
]

export default function Intro() {
  return (
    <section id="intro" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>The Long View</Eyebrow>
          <p className="mt-8 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Raut is a diversified company that acquires real estate, builds technology, and
            operates businesses — with a horizon measured in decades, not quarters.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="bg-paper p-8 sm:p-10">
              <p className="font-display text-5xl font-extrabold tracking-tight text-blue">
                {s.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink">
                {s.label}
              </p>
              <p className="mt-2 text-sm text-ink/60">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
