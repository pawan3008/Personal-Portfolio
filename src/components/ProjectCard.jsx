import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Apple, Play } from 'lucide-react'

/**
 * Reusable project card. When `featured`, renders a larger two-column layout;
 * otherwise a compact vertical card. Heavy hover effects are desktop-only.
 * Supports separate App Store and Google Play links.
 */
export default function ProjectCard({ project, featured = false, index = 0 }) {
  const appStoreLink = project.appStore_link || ''
  const playStoreLink = project.playStore_link || ''
  const primaryLink = appStoreLink || playStoreLink
  const hasLink = Boolean(primaryLink)
  const LinkTag = hasLink ? 'a' : 'div'
  const linkProps = hasLink
    ? { href: primaryLink, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
      className={`group surface relative overflow-hidden transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-glow ${
        featured ? 'lg:grid lg:grid-cols-2' : ''
      }`}
    >
      {/* Visual panel */}
      <div
        className={`relative flex items-center justify-center overflow-hidden border-line bg-gradient-to-br from-accent/15 via-bg-elevated to-bg-card ${
          featured ? 'min-h-[240px] border-b lg:border-b-0 lg:border-r' : 'min-h-[150px] border-b'
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-40" />
        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            loading="lazy"
            className={`relative select-none rounded-2xl object-contain shadow-card transition-transform duration-300 md:group-hover:scale-105 ${
              featured ? 'h-28 w-28' : 'h-20 w-20'
            }`}
          />
        ) : (
          <span className="relative select-none font-mono text-4xl font-bold tracking-tight text-white/90 transition-transform duration-300 md:group-hover:scale-105 sm:text-5xl">
            {project.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </span>
        )}
        <span className="absolute bottom-3 left-4 font-mono text-xs text-ink-faint">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className={`flex flex-col p-6 ${featured ? 'sm:p-8' : ''}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={`font-bold text-white ${featured ? 'text-2xl' : 'text-xl'}`}>
              {project.name}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-accent-soft">{project.subtitle}</p>
          </div>
          <LinkTag
            {...linkProps}
            aria-label={hasLink ? `Open ${project.name}` : undefined}
            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-ink-soft transition-all ${
              hasLink
                ? 'hover:border-accent/50 hover:text-accent-soft md:group-hover:border-accent/50'
                : 'opacity-40'
            }`}
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5"
            />
          </LinkTag>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        {/* Key features */}
        <ul
          className={`mt-4 grid gap-x-4 gap-y-1.5 ${
            featured ? 'sm:grid-cols-2' : ''
          }`}
        >
          {(featured ? project.features : project.features.slice(0, 5)).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
              <Check size={15} className="mt-0.5 shrink-0 text-accent-soft" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Store links */}
        {hasLink && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {appStoreLink && (
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-white"
              >
                <Apple size={16} aria-hidden="true" />
                App Store
              </a>
            )}
            {playStoreLink && (
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-white"
              >
                <Play size={16} aria-hidden="true" />
                Google Play
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
