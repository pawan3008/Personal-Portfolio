import { motion } from 'framer-motion'

/**
 * Consistent section wrapper with an animated heading.
 * Keeps spacing + heading style unified across the site.
 */
export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="container-px">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-ink-soft">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
