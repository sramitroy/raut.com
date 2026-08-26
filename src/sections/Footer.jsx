const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'About Amit', href: '#founder' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-paper/10 bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:justify-between">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight text-paper">
          RAUT
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center text-sm text-paper/60 transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-sm text-paper/40">
          <span>© 2026 Raut</span>
          <a href="#" className="flex min-h-11 items-center hover:text-paper/70">
            Privacy
          </a>
          <a href="#" className="flex min-h-11 items-center hover:text-paper/70">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
