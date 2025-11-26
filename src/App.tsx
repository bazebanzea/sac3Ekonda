import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">SAC3</h1>
              <p className="text-green-100 mt-1 text-sm">Ensemble, cultivons l'avenir des communautés Ekonda</p>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`hover:text-green-200 transition-colors px-3 py-2 ${currentPage === 'home' ? 'border-b-2 border-white' : ''}`}
              >
                Accueil
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className={`hover:text-green-200 transition-colors px-3 py-2 ${currentPage === 'projects' ? 'border-b-2 border-white' : ''}`}
              >
                Nos Projets
              </button>
              <button
                onClick={scrollToContact}
                className="hover:text-green-200 transition-colors px-3 py-2"
              >
                Contact
              </button>
            </nav>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 pb-4">
              <button
                onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
                className="text-left py-2 px-4 hover:bg-green-700 rounded transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => { setCurrentPage('projects'); setIsMobileMenuOpen(false); }}
                className="text-left py-2 px-4 hover:bg-green-700 rounded transition-colors"
              >
                Nos Projets
              </button>
              <button
                onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}
                className="text-left py-2 px-4 hover:bg-green-700 rounded transition-colors"
              >
                Contact
              </button>
            </nav>
          )}
        </div>
      </header>

      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onExploreClick={() => setCurrentPage('projects')} />
            <Mission />
            <Projects onViewAllClick={() => setCurrentPage('projects')} />
            <Contact />
          </>
        ) : (
          <ProjectsPage />
        )}
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-3">
            <p className="text-lg font-semibold text-white">
              &copy; 2025 SAC3 - Ensemble, cultivons l'avenir des communautés Ekonda
            </p>
            <p className="text-sm">Territoire de Bikoro, Province de l'Équateur, RDC</p>
            <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
              <a
                href="mailto:bienvenueboswa@gmail.com"
                className="hover:text-green-400 transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                <span className="text-sm">bienvenueboswa@gmail.com</span>
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="tel:+243811353861"
                className="hover:text-green-400 transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                <span className="text-sm">+243 811 353 861</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
