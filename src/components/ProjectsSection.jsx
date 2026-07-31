import { projects } from '../data/portfolioContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-12 text-center">
          <h2 className="font-label mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </h2>
          <p className="font-headline text-4xl font-black text-on-surface md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">
            A selection of projects I've built, showcasing my skills in frontend
            development and UI design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-surface-container-high to-surface-container-low">
                <span className="material-symbols-outlined text-6xl text-primary/30 transition-transform duration-500 group-hover:scale-110">
                  {project.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-50" />
                {project.featured && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-headline mb-2 text-xl font-bold text-on-surface">
                  {project.name}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-on-surface-variant">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      project.liveUrl !== '#'
                        ? 'bg-primary/15 text-primary hover:bg-primary/25'
                        : 'cursor-not-allowed bg-surface-container-high text-on-surface-variant/40'
                    }`}
                    href={project.liveUrl}
                    target={project.liveUrl !== '#' ? '_blank' : undefined}
                    rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                  >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                    Live Demo
                  </a>
                  <a
                    className="flex items-center gap-1.5 rounded-lg bg-surface-container-high px-4 py-2 text-sm font-medium text-on-surface-variant transition-all hover:bg-surface-container-highest hover:text-on-surface"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">code</span>
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
