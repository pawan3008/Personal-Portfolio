import { motion } from 'framer-motion'
import Section from './Section'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Toolbox"
      title="Technical Skills"
      subtitle="A focused stack built around React Native and production mobile engineering."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.08 }}
            className="surface p-6"
          >
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="chip hover:border-accent/40 hover:text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
