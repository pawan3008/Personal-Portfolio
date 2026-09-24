import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
              <motion.a
                key={app.name}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: (i % 2) * 0.06 }}
                className="group surface flex items-center justify-between gap-3 p-4 transition-all hover:border-accent/40 md:hover:-translate-y-0.5"
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium text-ink group-hover:text-white">
                    {app.name}
                  </span>
                  <span className="font-mono text-xs text-ink-faint">{app.store}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-ink-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
