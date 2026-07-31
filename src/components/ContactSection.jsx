import { site, socialLinks } from '../data/portfolioContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../hooks/useLanguage'

function ContactSection() {
  const { ref, isVisible } = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="contact" className="px-6 py-24 md:px-8">
      <div
        ref={ref}
        className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline mb-6 text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            {t.contact.title}{' '}
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
            ?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-on-surface-variant">
            {t.contact.description}
          </p>

          <div className="relative overflow-hidden rounded-3xl border border-outline-variant/20 bg-surface-container p-8 md:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-tertiary/10 blur-[100px]" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-1.5 text-xs font-medium text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                {t.contact.available}
              </div>

              <a
                className="inline-block rounded-full bg-gradient-to-r from-primary to-primary-container px-10 py-5 text-lg font-black text-on-primary-fixed shadow-xl shadow-primary/20 transition-transform duration-300 hover:scale-105 md:text-2xl"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    className="group flex items-center gap-2 rounded-xl border border-outline-variant/20 bg-surface-container-high px-5 py-3 text-sm font-medium text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
