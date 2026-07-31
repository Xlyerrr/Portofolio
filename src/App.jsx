import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import FloatingContactButton from './components/FloatingContactButton'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <div className="grainy-overlay min-h-screen bg-background text-on-background">
      <Header />

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  )
}

export default App
