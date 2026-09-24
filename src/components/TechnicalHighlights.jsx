import { motion } from 'framer-motion'
import Section from './Section'
import { highlights } from '../data/highlights'

export default function TechnicalHighlights() {
  return (
    <Section
      id="highlights"
      eyebrow="05 · Engineering"
      title="Engineering Highlights"
      subtitle="Core areas of production mobile engineering I work in day to day."
      className="section--alt"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => {
          const Icon = h.icon
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className="group surface p-6 transition-colors hover:border-accent/30"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-soft transition-transform duration-300 group-hover:scale-105">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-white">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{h.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
