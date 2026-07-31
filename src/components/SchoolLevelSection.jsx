import { schoolLevels } from '../data/portfolioContent'

function SchoolLevelSection() {
  return (
    <section className="bg-surface-container-low py-24" id="school">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="font-label mb-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Education
        </h2>
        <p className="font-headline mb-10 text-4xl font-black text-on-surface">
          School Level
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {schoolLevels.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-6 rounded-xl bg-surface p-8"
            >
              <span className="material-symbols-outlined filled-icon text-4xl text-primary">
                {item.icon}
              </span>
              <div>
                <span className="mb-2 block text-xs font-bold tracking-widest text-primary">
                  {item.period}
                </span>
                <h3 className="mb-2 text-xl font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolLevelSection
