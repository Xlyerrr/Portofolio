import { hero, site } from '../data/portfolioContent'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center md:px-8"
    >
      <div
        className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        style={{ animation: 'pulse-slow 4s ease-in-out infinite' }}
      />

      <div className="relative mb-8" style={{ animation: 'fade-in-up 0.7s ease-out forwards' }}>
        <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-primary/30 p-1.5 md:h-52 md:w-52">
          <img
            alt={site.name}
            className="h-full w-full rounded-full object-cover"
            src={site.heroImage}
          />
        </div>
      </div>

      <div
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary"
        style={{ animation: 'fade-in-up 0.7s ease-out 0.1s forwards', opacity: 0 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>
        Available for opportunities
      </div>

      <h1
        className="font-headline mb-5 text-5xl leading-none font-black tracking-tight text-on-surface md:text-8xl"
        style={{ animation: 'fade-in-up 0.7s ease-out 0.2s forwards', opacity: 0 }}
      >
        {hero.firstName}{' '}
        <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
          {hero.lastName}
        </span>
      </h1>

      <h2
        className="mb-4 text-lg font-semibold tracking-wide text-primary md:text-2xl"
        style={{ animation: 'fade-in-up 0.7s ease-out 0.3s forwards', opacity: 0 }}
      >
        {hero.title}
      </h2>

      <p
        className="mb-8 max-w-2xl text-base font-light leading-relaxed text-on-surface-variant md:text-lg"
        style={{ animation: 'fade-in-up 0.7s ease-out 0.4s forwards', opacity: 0 }}
      >
        {hero.description}
      </p>

      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        style={{ animation: 'fade-in-up 0.7s ease-out 0.5s forwards', opacity: 0 }}
      >
        {hero.techBadges.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-outline-variant/30 bg-surface-container px-4 py-1.5 text-xs font-medium tracking-wide text-on-surface-variant"
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className="flex flex-col gap-4 sm:flex-row"
        style={{ animation: 'fade-in-up 0.7s ease-out 0.6s forwards', opacity: 0 }}
      >
        <a
          className="rounded-full bg-gradient-to-r from-primary to-primary-container px-10 py-4 font-extrabold tracking-tight text-on-primary-fixed shadow-xl shadow-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
          href="#projects"
        >
          {hero.primaryAction}
        </a>
        <a
          className="rounded-full border-2 border-outline-variant/40 px-10 py-4 font-extrabold tracking-tight text-on-surface transition-all duration-300 hover:border-primary/50 hover:text-primary"
          href="#contact"
        >
          {hero.secondaryAction}
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 flex flex-col items-center gap-2 text-on-surface-variant transition-colors hover:text-primary"
        style={{ animation: 'bounce-slow 2s ease-in-out infinite' }}
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <span className="material-symbols-outlined text-xl">keyboard_arrow_down</span>
      </a>
    </section>
  )
}

export default HeroSection
