import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin, FileText, Download } from 'lucide-react'
import { profile } from '../data/profile'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const techBadges = [
  { label: 'React Native', x: '6%', y: '12%', delay: 0 },
  { label: 'TypeScript', x: '60%', y: '4%', delay: 0.4 },
  { label: 'JavaScript', x: '68%', y: '68%', delay: 0.8 },
  { label: 'Firebase', x: '2%', y: '64%', delay: 1.2 },
  { label: 'iOS', x: '78%', y: '38%', delay: 0.6 },
  { label: 'Android', x: '14%', y: '86%', delay: 1 },
]

const codeLines = [
  { indent: 0, tokens: [['const ', 'text-accent-soft'], ['dev ', 'text-white'], ['= {', 'text-ink-soft']] },
  { indent: 1, tokens: [['name: ', 'text-ink-soft'], ["'Pawan Vishwakarma'", 'text-emerald-300'], [',', 'text-ink-soft']] },
  { indent: 1, tokens: [['stack: ', 'text-ink-soft'], ["'React Native'", 'text-emerald-300'], [',', 'text-ink-soft']] },
  { indent: 1, tokens: [['platforms: ', 'text-ink-soft'], ['[', 'text-ink-soft'], ["'iOS'", 'text-emerald-300'], [', ', 'text-ink-soft'], ["'Android'", 'text-emerald-300'], ['],', 'text-ink-soft']] },
  { indent: 1, tokens: [['experience: ', 'text-ink-soft'], ["'4+ years'", 'text-emerald-300'], [',', 'text-ink-soft']] },
  { indent: 1, tokens: [['shipsToProduction: ', 'text-ink-soft'], ['true', 'text-amber-300'], [',', 'text-ink-soft']] },
  { indent: 0, tokens: [['}', 'text-ink-soft']] },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background grid + gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-sm text-accent-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.label}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 text-xl font-semibold text-ink-soft sm:text-2xl"
          >
            {profile.headline}
          </motion.h2>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <SocialLink href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href={profile.socials.github} label="GitHub">
              <Github size={20} />
            </SocialLink>
            <SocialLink href={profile.socials.email} label="Email">
              <Mail size={20} />
            </SocialLink>
          </motion.div>
        </motion.div>

        {/* RIGHT — animated developer visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[440px] sm:block"
          aria-hidden="true"
        >
          {/* Floating tech badges */}
          {techBadges.map((badge) => (
            <motion.span
              key={badge.label}
              className="absolute z-20 rounded-xl border border-line bg-bg-elevated/90 px-3 py-1.5 font-mono text-xs font-medium text-ink shadow-card backdrop-blur"
              style={{ left: badge.x, top: badge.y }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: badge.delay,
              }}
            >
              {badge.label}
            </motion.span>
          ))}

          {/* Code card */}
          <div className="absolute inset-8 flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-card/95 shadow-glow">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-ink-faint">developer.ts</span>
            </div>
            <div className="flex-1 space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  style={{ paddingLeft: `${line.indent * 16}px` }}
                >
                  {line.tokens.map(([txt, cls], j) => (
                    <span key={j} className={cls}>
                      {txt}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-ink-soft transition-all hover:border-accent/40 hover:text-accent-soft"
    >
      {children}
    </a>
  )
}
