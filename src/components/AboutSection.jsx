import { about, skills } from '../data/portfolioContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="bg-surface-container-low/50 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="font-label mb-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {about.label}
              </h2>
              <p className="font-headline mb-8 text-3xl leading-tight font-black text-on-surface md:text-4xl">
                {about.title}
              </p>
              <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">
                {about.description}
              </p>

              <div className="flex gap-8">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-headline text-3xl font-black text-primary md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-high">
                <img
                  alt={about.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={about.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-headline mb-10 text-center text-2xl font-black text-on-surface md:text-3xl">
              Tech <span className="text-primary">Stack</span>
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="rounded-2xl border border-outline-variant/20 bg-surface-container p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined filled-icon text-2xl text-primary">
                      {skillGroup.icon}
                    </span>
                    <h4 className="font-headline text-lg font-bold text-on-surface">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs font-medium text-on-surface-variant"
                      >
                        {item}
                      </span>
                    ))}
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

export default AboutSection
