import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { IMAGES } from '../config/images'

export default function Hero() {
  const ref = useRef(null)
  // Hand-rolled progress (0 → 1 across the pinned 300vh): useScroll's element
  // tracking measured inconsistent bounds in this stack, so we compute it
  // directly — the hero starts at page top, so scrollY maps 1:1.
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const total = (ref.current?.offsetHeight ?? 0) - window.innerHeight
      if (total > 0) {
        scrollYProgress.set(Math.min(1, Math.max(0, window.scrollY / total)))
      }
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [scrollYProgress])

  // camera dolly: slow push toward the front door (origin ~door height)
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 1.9])
  // opening copy retires early so the approach reads clean
  const introOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0])
  const introY = useTransform(scrollYProgress, [0, 0.16], [0, -40])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const scrim = useTransform(scrollYProgress, [0, 0.45], [0.55, 0.15])
  // mid-scroll beat
  const beatOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.62], [0, 1, 0])
  const beatY = useTransform(scrollYProgress, [0.3, 0.62], [24, -24])
  // doorway light bloom floods, then the first panel dissolves over it
  const bloomOpacity = useTransform(scrollYProgress, [0.68, 0.92], [0, 1])
  const floodOpacity = useTransform(scrollYProgress, [0.82, 0.98], [0, 1])

  return (
    <section id="top" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={IMAGES.heroExterior}
          alt="The Raut estate at dusk"
          style={{ scale, transformOrigin: '50% 62%', willChange: 'transform' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <motion.div
          style={{ opacity: scrim }}
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink/80"
        />

        {/* opening copy */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 flex items-center justify-center px-5"
        >
          <div className="max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Real Estate · Technology · Operations
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl">
              Building long-term value through real estate, technology, and operations.
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="relative z-[9999] flex min-h-12 items-center rounded-full bg-gold px-8 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Contact Us
              </a>
              <a
                href="#intro"
                className="relative z-[9999] flex min-h-12 items-center rounded-full border border-paper/40 px-8 text-base font-medium text-paper transition-colors hover:border-paper"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

        {/* mid-scroll beat */}
        <motion.div
          style={{ opacity: beatOpacity, y: beatY }}
          className="absolute inset-0 flex items-center justify-center px-5"
        >
          <div className="max-w-2xl text-center">
            <p className="font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
              Welcome to Raut
            </p>
            <p className="mt-4 text-lg text-paper/85 sm:text-xl">
              Step inside. This is how we build.
            </p>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-paper/80"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll to enter</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.span>
        </motion.div>

        {/* doorway light bloom */}
        <motion.div
          style={{
            opacity: bloomOpacity,
            background:
              'radial-gradient(ellipse 90% 75% at 50% 62%, #FFF6DF 0%, rgba(255,246,223,0.85) 40%, rgba(255,246,223,0) 72%)',
          }}
          className="pointer-events-none absolute inset-0"
        />
        <motion.div
          style={{ opacity: floodOpacity }}
          className="pointer-events-none absolute inset-0 bg-paper"
        />
      </div>
    </section>
  )
}
