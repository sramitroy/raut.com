import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  // flip to solid just before the hero's sticky frame releases, when the
  // doorway bloom has already whitened the screen
  useMotionValueEvent(scrollY, 'change', (v) => {
    const heroH = document.getElementById('top')?.offsetHeight ?? window.innerHeight * 3
    setSolid(v > heroH - window.innerHeight * 1.1)
  })

  const linkColor = solid ? 'text-ink hover:text-blue' : 'text-paper/90 hover:text-paper'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-paper/95 shadow-[0_1px_0_rgba(10,11,13,0.08)] backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className={`font-display text-xl font-extrabold tracking-tight ${
            solid ? 'text-ink' : 'text-paper'
          }`}
        >
          RAUT
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`flex min-h-11 items-center text-sm font-medium transition-colors ${linkColor}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex min-h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`flex h-11 w-11 items-center justify-center md:hidden ${
            solid ? 'text-ink' : 'text-paper'
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-ink/10 bg-paper px-5 pb-4 md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-ink/5 text-base font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-gold text-base font-semibold text-ink"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
