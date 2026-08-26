import { motion } from 'framer-motion'
import Reveal from './Reveal'

// Full-height transparent "window" — the fixed background world shows through.
export default function Interlude({ index, number, title, line, onActive }) {
  return (
    <motion.section
      onViewportEnter={() => onActive(index)}
      viewport={{ amount: 0.45 }}
      className="relative flex h-screen items-end"
    >
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="inline-block h-0.5 w-8 bg-gold" aria-hidden="true" />
            {number} — {title}
          </p>
          <p className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-5xl">
            {line}
          </p>
        </Reveal>
      </div>
    </motion.section>
  )
}
