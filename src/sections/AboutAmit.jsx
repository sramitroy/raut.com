import { useState } from 'react'
import amitHeadshot from '../assets/amit-raut-headshot.jpg'
import Reveal, { Eyebrow } from '../components/Reveal'

const CREDENTIALS = [
  'Inc. 500 #14 fastest-growing private company — Digital Advertising',
  'Inc. 500 #100 fastest-growing company in America — AdSugar',
  'Commercial & multifamily acquisition, operations, and asset management',
  'Board member, non-profit raising funds for hospitalized children',
]

export default function AboutAmit() {
  const [photoLoaded, setPhotoLoaded] = useState(false)

  return (
    <section id="founder" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>About Amit</Eyebrow>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Photo column */}
          <Reveal className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white/60">
              {!photoLoaded && (
                <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 p-8 text-center">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
                    <circle cx="36" cy="28" r="14" stroke="#0a0b0d" strokeWidth="1.5" />
                    <path
                      d="M8 68c0-15.46 12.54-28 28-28s28 12.54 28 28"
                      stroke="#0a0b0d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-sm font-medium text-ink/50">Loading…</p>
                </div>
              )}
              <img
                src={amitHeadshot}
                alt="Amit Raut, Founder and Managing Director of BigCrowd"
                className={`aspect-[4/5] w-full object-cover object-top transition-opacity duration-500 ${
                  photoLoaded ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                onLoad={() => setPhotoLoaded(true)}
              />
            </div>
          </Reveal>

          {/* Bio column */}
          <Reveal delay={0.12} className="lg:col-span-3">
            <div className="flex h-full flex-col justify-center">
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Amit Raut
              </h2>
              <p className="mt-2 text-sm font-medium text-ink/50">
                CEO ·{' '}
                <a
                  href="https://bigcrowd.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-ink/80 transition-colors"
                >
                  BigCrowd
                </a>
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
                <p>
                  With more than 20 years under his belt in the digital marketing space transforming
                  legacy practices with newfound innovation to elevate businesses to the next level.
                  Throughout his long-standing career, Amit has always strived to make a true and
                  lasting impact; knowing that the key to success is what he can do for others. This
                  reason alone sparked his entrepreneurial path which led him to founding several
                  multi-million-dollar advertising companies.
                </p>
                <p>
                  With international recognition across his various companies, Digital Advertising
                  was ranked the 14th fastest-growing private company by Inc. 500. His most recent
                  achievement saw AdSugar being ranked by Inc. 500 as the 100th fastest growing
                  private company in America.
                </p>
                <p>
                  When he's not pursuing investment opportunities or running his business empire,
                  Amit is an active philanthropist — purpose driven and committed to supporting
                  children across the country. He currently serves as a board member of a non-profit
                  organization that raises funds to bring joy to hospitalized children.
                </p>
                <p>
                  As the Founder and Managing Director of BigCrowd — a commercial, multifamily
                  property and asset management company specializing in income-producing investment
                  opportunities — Amit thrives in helping clients maximize their financial potential
                  for real estate and wealth accumulation by managing risk and adapting to their
                  evolving goals.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 rounded-2xl border border-ink/10 bg-white/60 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Recognition &amp; Focus
                </p>
                <ul className="mt-4 space-y-2">
                  {CREDENTIALS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:amit@raut.com"
                  className="flex min-h-11 items-center rounded-full bg-blue px-7 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
                >
                  Contact Amit
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
