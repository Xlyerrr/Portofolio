import { site, socialLinks } from '../data/portfolioContent'

function Footer() {
  return (
    <footer
      id="socialLinks"
      className="border-t border-outline-variant/20 bg-surface-container-low py-12"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <span className="font-headline mb-2 block text-lg font-bold text-primary">
              {site.fullName}
            </span>
            <p className="text-sm uppercase tracking-widest text-on-surface-variant">
              &copy; {site.copyrightYear} {site.fullName}. Crafted with intent.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                className="flex items-center gap-2 rounded-lg border border-outline-variant/20 px-4 py-2 text-sm uppercase tracking-widest text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
              >
                <span className="material-symbols-outlined text-lg">
                  {item.icon}
                </span>
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-outline-variant/10 pt-6 text-center">
          <p className="text-xs text-on-surface-variant/60">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
