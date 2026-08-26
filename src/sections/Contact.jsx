import { useState } from 'react'
import Reveal, { Eyebrow } from '../components/Reveal'

const TOPICS = ['Real Estate', 'Technology & AI', 'Business Operations', 'Careers', 'General']

// Swap these for the real profile URLs when ready.
const LINKEDIN = [
  { label: 'Amit Raut', href: 'https://www.linkedin.com/in/amit-raut' },
  { label: 'Raut Properties', href: 'https://www.linkedin.com/company/raut-properties' },
]

const inputClass =
  'w-full min-h-11 rounded-lg border border-paper/20 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-blue focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    topic: TOPICS[0],
    message: '',
  })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const subject = `[Raut] ${form.topic} inquiry — ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || '—'}`,
      `Email: ${form.email}`,
      `Topic: ${form.topic}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:Hello@raut.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    try {
      await submitContactForm(form)
    } catch (error) {
  
    }
  }

  // Service function for contact form submission
  const submitContactForm = async (formData) => {
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('AJAX submission failed:', error)
      throw error
    }
  }

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow dark>Contact</Eyebrow>
          <h2 className="mt-8 max-w-3xl font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Start a conversation.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <dl className="space-y-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href="mailto:Hello@raut.com"
                    className="font-display text-2xl font-bold text-paper hover:text-blue"
                  >
                    Hello@raut.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href="tel:+12162007780"
                    className="font-display text-2xl font-bold text-paper hover:text-blue"
                  >
                    (216) 200-7780
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
                  Address
                </dt>
                <dd className="mt-2 text-lg text-paper/80">96 Clinton Ave</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
                  Markets
                </dt>
                <dd className="mt-2 text-lg text-paper/80">Ohio · New Jersey · Pennsylvania</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
                  LinkedIn
                </dt>
                <dd className="mt-3 flex flex-wrap gap-3">
                  {LINKEDIN.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-11 items-center gap-2 rounded-full border border-paper/25 px-6 text-sm font-medium text-paper transition-colors hover:border-blue hover:text-blue"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                      {l.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-paper/10 bg-white/5 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-paper/60">Name</span>
                  <input required value={form.name} onChange={set('name')} className={inputClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-paper/60">Company</span>
                  <input value={form.company} onChange={set('company')} className={inputClass} placeholder="Optional" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium text-paper/60">Email</span>
                <input type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="you@company.com" />
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium text-paper/60">Topic</span>
                <select value={form.topic} onChange={set('topic')} className={`${inputClass} appearance-none bg-ink`}>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium text-paper/60">Message</span>
                <textarea required rows="4" value={form.message} onChange={set('message')} className={inputClass} placeholder="How can we help?" />
              </label>
              <button
                type="submit"
                className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-8 text-base font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>
              <p className="mt-3 text-center text-xs text-paper/40">
                Opens your email client with the message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
