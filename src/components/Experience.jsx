import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import Section from './Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Career" title="Experience">
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent sm:left-[23px]"
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
              className="relative pl-14 sm:pl-16"
            >
              {/* Node */}
              <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-bg-elevated text-accent-soft sm:h-12 sm:w-12">
                <Briefcase size={18} aria-hidden="true" />
              </span>

              <div className="surface p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <span className="font-mono text-sm text-accent-soft">{job.period}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
                  <span className="font-medium text-ink">{job.company}</span>
                  <span className="hidden text-ink-faint sm:inline">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" />
                    {job.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
