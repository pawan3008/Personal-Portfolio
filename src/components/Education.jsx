import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import Section from './Section'
import { education } from '../data/profile'

export default function Education() {
  return (
    <Section id="education" eyebrow="07 · Background" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-8"
      >
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-soft">
          <GraduationCap size={22} aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
          <p className="mt-0.5 text-ink-soft">{education.school}</p>
          <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink-faint">
            <MapPin size={14} aria-hidden="true" />
            {education.location}
          </p>
        </div>
        <span className="font-mono text-sm text-accent-soft">{education.period}</span>
      </motion.div>
    </Section>
  )
}
