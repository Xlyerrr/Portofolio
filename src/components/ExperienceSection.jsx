import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../hooks/useLanguage'

const getStartYear = (period) => {
  const match = period.match(/(\d{4})/)
  return match ? parseInt(match[1], 10) : 0
}

function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal()
  const { t, c } = useLanguage()

  const timelineItems = [
    ...c.experiences.map((item) => ({ ...item, category: t.experience.work })),
    ...c.education.map((item) => ({ ...item, category: t.experience.education })),
  ].sort((a, b) => getStartYear(b.period) - getStartYear(a.period))

  return (
    <section
      id="experience"
      className="bg-surface-container-low/50 py-24"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="mb-12 text-center">
            <h2 className="font-label mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {t.experience.label}
            </h2>
            <p className="font-headline text-4xl font-black text-on-surface md:text-5xl">
              {t.experience.title}{' '}
              <span className="text-primary">{t.experience.titleHighlight}</span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-primary/50 via-outline-variant/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={`${item.category}-${item.title}`}
                  className={`relative flex gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-surface md:left-1/2" />

                  <div className="hidden md:block md:w-1/2" />

                  <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-8">
                    <div className="rounded-2xl border border-outline-variant/20 bg-surface-container p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                          {item.category}
                        </span>
                        <span className="text-xs font-medium tracking-wide text-on-surface-variant">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="font-headline mb-1 text-lg font-bold text-on-surface">
                        {item.title}
                      </h4>
                      <p className="mb-3 text-sm font-medium text-primary">
                        {item.company || item.institution}
                      </p>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
