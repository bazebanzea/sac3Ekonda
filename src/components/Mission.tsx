import { Sprout, Apple, Users } from 'lucide-react';

function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
          <p className="text-xl text-gray-700">
            Nous articulons notre action autour de trois axes thématiques majeurs :
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sprout className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Agriculture Durable</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Revitaliser la filière cacao et créer un moteur de développement économique pour les communautés Ekonda
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Apple className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sécurité Alimentaire</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Garantir un accès durable aux protéines animales et améliorer la nutrition des populations
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Autonomisation des Femmes</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Offrir formation et opportunités économiques aux filles-mères pour construire un avenir meilleur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
