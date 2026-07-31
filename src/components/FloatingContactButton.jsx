import { site } from '../data/portfolioContent'

function FloatingContactButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-110"
        href={`mailto:${site.email}`}
        aria-label="Send email"
      >
        <span className="material-symbols-outlined filled-icon text-2xl transition-transform group-hover:rotate-12">
          mail
        </span>
      </a>
    </div>
  )
}

export default FloatingContactButton
