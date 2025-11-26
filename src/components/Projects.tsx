import { ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onViewAllClick: () => void;
}

function Projects({ onViewAllClick }: ProjectsProps) {
  const images = [
    {
      url: '/IMG-20251020-WA0116.jpg',
      alt: 'Cacaoyers en production',
      caption: 'Plantation de cacao restaurée'
    },
    {
      url: '/IMG-20251020-WA0117.jpg',
      alt: 'Travaux agricoles communautaires',
      caption: 'Réhabilitation des plantations'
    },
    {
      url: '/IMG-20251020-WA0118.jpg',
      alt: 'Entretien des cultures',
      caption: 'Entretien des cacaoyers'
    },
    {
      url: '/image0.jpeg',
      alt: 'Réunion Enabel',
      caption: 'Partenariat Enabel et SAC3'
    },
    {
      url: '/image1.jpeg',
      alt: 'Équipe SAC3',
      caption: 'Équipe engagée sur le terrain'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Actions sur le Terrain</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800 font-medium text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-green-600 to-green-500 py-16 rounded-2xl shadow-xl">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-white mb-4">
              Découvrez Nos Projets en Détail
            </h3>
            <p className="text-green-50 text-lg mb-8">
              Explorez comment SAC3 transforme les communautés Ekonda à travers trois projets innovants
            </p>
            <button
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all hover:scale-105 shadow-lg"
            >
              Voir nos projets
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
