import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export default function Footer() {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: profile.socials.linkedin },
    { icon: Github, label: 'GitHub', href: profile.socials.github },
    { icon: Mail, label: 'Email', href: profile.socials.email },
  ]

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="container-px flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-mono text-base font-semibold text-white">
            Pawan Vishwakarma
          </a>
          <p className="mt-1 text-sm text-ink-soft">
            React Native Developer &nbsp;|&nbsp; Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon
            const external = s.href.startsWith('http')
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-ink-soft transition-colors hover:border-accent/40 hover:text-accent-soft"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            )
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-ink-soft transition-colors hover:border-accent/40 hover:text-accent-soft"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-px py-5 text-center text-sm text-ink-faint">
          © {year} Pawan Vishwakarma. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
