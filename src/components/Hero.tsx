import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bâtir un avenir durable pour les communautés Ekonda
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            SAC3 s'engage à travers des initiatives structurantes à fort impact socio-économique dans le territoire de Bikoro, province de l'Équateur. Nos projets sont conçus pour répondre aux défis locaux en proposant des solutions durables et en renforçant la résilience des communautés.
          </p>
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
          >
            Découvrir nos projets
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
