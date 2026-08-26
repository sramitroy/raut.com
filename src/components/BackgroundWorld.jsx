import { motion } from 'framer-motion'
import { WORLD } from '../config/images'

const ALTS = [
  'The Raut estate exterior at dusk',
  'Interior hall of the estate',
  'Estate grounds at golden hour',
]

// The persistent photographic "world" behind the whole page. Content panels
// slide over it; transparent interlude sections let it show through.
export default function BackgroundWorld({ active }) {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {WORLD.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={ALTS[i]}
          initial={false}
          animate={{ opacity: active === i ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: 'opacity' }}
        />
      ))}
      <div className="absolute inset-0 bg-ink/35" />
    </div>
  )
}
