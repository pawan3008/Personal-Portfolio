import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, Check } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email, // shown on the page
    href: `mailto:${profile.contactEmail}`, // where the mail actually goes
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.socials.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'See my code',
    href: profile.socials.github,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend: open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${profile.contactEmail}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section
      id="contact"
      eyebrow="08 · Contact"
      title="Let's Build Something Great"
      subtitle="Have a project, opportunity, or just want to connect? Feel free to reach out."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <p className="inline-flex items-center gap-2 text-ink-soft">
            <MapPin size={16} className="text-accent-soft" aria-hidden="true" />
            Based in {profile.location}
          </p>
          {contactMethods.map((m) => {
            const Icon = m.icon
            const external = m.href.startsWith('http')
            return (
              <a
                key={m.label}
                href={m.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group surface flex items-center gap-4 p-4 transition-colors hover:border-accent/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent-soft transition-transform group-hover:scale-105">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-ink-faint">{m.label}</span>
                  <span className="block font-medium text-ink group-hover:text-white">
                    {m.value}
                  </span>
                </span>
              </a>
            )
          })}
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          onSubmit={handleSubmit}
          className="surface flex flex-col gap-4 p-6 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
              />
            </Field>
          </div>
          <Field label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project or opportunity..."
              className="form-input resize-none"
            />
          </Field>
          <button type="submit" className="btn-primary mt-1 w-full sm:w-auto sm:self-start">
            {sent ? (
              <>
                <Check size={18} aria-hidden="true" />
                Opening your mail app
              </>
            ) : (
              <>
                <Send size={18} aria-hidden="true" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  )
}
