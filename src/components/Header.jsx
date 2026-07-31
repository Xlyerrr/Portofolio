import { useEffect, useState } from 'react'
import { navItems, site } from '../data/portfolioContent'
import { useScrollProgress, useActiveSection } from '../hooks/useScrollReveal'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progress = useScrollProgress()
  const activeSection = useActiveSection(['home', 'about', 'projects', 'experience', 'contact'])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/30 transition-transform duration-300 hover:scale-110">
              <img
                alt={site.name}
                className="h-full w-full object-cover"
                src={site.avatar}
              />
            </div>
            <span className="font-headline text-xl font-black tracking-tighter text-primary">
              {site.name}
            </span>
          </a>

          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`font-headline transition-all duration-200 ${
                  activeSection === item.id
                    ? 'font-bold text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                href={item.href}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="mt-1 block h-0.5 w-full rounded-full bg-primary" />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              className="rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-2 text-sm font-bold text-on-primary-fixed transition-transform duration-200 hover:scale-95"
              href={`mailto:${site.email}`}
            >
              Contact Me
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-outline-variant/20 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={`rounded-lg px-4 py-3 font-headline transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary/10 font-bold text-primary'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`}
                  href={item.href}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-3 text-center font-bold text-on-primary-fixed"
                href={`mailto:${site.email}`}
                onClick={handleNavClick}
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
