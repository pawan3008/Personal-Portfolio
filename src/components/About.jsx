import { motion } from 'framer-motion'
import Section from './Section'
import { profile, stats } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="01 · Introduction" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-lg leading-relaxed text-ink-soft">{profile.about}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['iOS & Android', 'Production Releases', 'Native Integrations', 'Performance'].map(
              (tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              className="surface group relative overflow-hidden p-6 transition-colors hover:border-accent/30"
            >
              <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{stat.label}</div>
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/10 blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
