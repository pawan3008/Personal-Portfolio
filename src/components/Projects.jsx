import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { moreApps } from '../data/moreApps'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      eyebrow="04 · Selected Work"
      title="Featured Projects"
      subtitle="Selected work across mobile applications, fintech, education, e-commerce and real-time platforms."
    >
      <div className="space-y-6">
        {featured && <ProjectCard project={featured} featured index={0} />}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i + 1} />
          ))}
        </div>
      </div>

      {/* Additional published apps — compact list */}
      {moreApps.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-5 text-lg font-semibold text-white">
            Additional Work
            <span className="ml-2 text-sm font-normal text-ink-faint">
              More apps shipped to the stores
            </span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {moreApps.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: (i % 2) * 0.06 }}
                className="surface flex items-center justify-between gap-3 p-4 transition-colors hover:border-accent/40"
              >
                <span className="min-w-0 font-medium text-ink">{app.name}</span>
                <span className="flex shrink-0 items-center gap-2">
                  {app.appStore_link && (
                    <a
                      href={app.appStore_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${app.name} on the App Store`}
                      className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-ink-soft transition-colors hover:border-accent/50 hover:text-white"
                    >
                      <Apple size={14} aria-hidden="true" />
                      iOS
                    </a>
                  )}
                  {app.playStore_link && (
                    <a
                      href={app.playStore_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${app.name} on Google Play`}
                      className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-ink-soft transition-colors hover:border-accent/50 hover:text-white"
                    >
                      <Play size={14} aria-hidden="true" />
                      Android
                    </a>
                  )}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
