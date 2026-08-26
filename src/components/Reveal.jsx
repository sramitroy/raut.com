import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? 'text-gold' : 'text-ink'
      }`}
    >
      <span className="inline-block h-0.5 w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  )
}
