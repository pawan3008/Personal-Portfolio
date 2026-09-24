import { motion } from 'framer-motion'
import { Package, Github, Check, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { openSource } from '../data/openSource'

export default function OpenSource() {
  if (!openSource.length) return null

  return (
    <Section
      id="open-source"
      eyebrow="06 · Open Source"
      title="Published Packages"
      subtitle="Reusable tooling I've built and published for the React Native community."
    >
      <div className="grid gap-6">
        {openSource.map((pkg, i) => (
          <motion.article
            key={pkg.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
            className="group surface p-6 transition-all duration-300 md:hover:border-accent/40 md:hover:shadow-glow sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-soft">
                <Package size={20} aria-hidden="true" />
              </span>
              <h3 className="font-mono text-lg font-semibold text-white">{pkg.name}</h3>
              <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-xs text-ink-soft">
                v{pkg.version}
              </span>
              {pkg.license && (
                <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-xs text-ink-soft">
                  {pkg.license}
                </span>
              )}
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
              {pkg.description}
            </p>

            <ul className="mt-4 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                  <Check size={15} className="mt-0.5 shrink-0 text-accent-soft" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {pkg.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {pkg.npm && (
                <a
                  href={pkg.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-white"
                >
                  <Package size={16} aria-hidden="true" />
                  View on npm
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
              {pkg.github && (
                <a
                  href={pkg.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-white"
                >
                  <Github size={16} aria-hidden="true" />
                  Source
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
