function ProjectsPage() {
  const projectImages = {
    cacao: [
      {
        url: '/IMG-20251020-WA0116.jpg',
        alt: 'Cacaoyers productifs'
      },
      {
        url: '/IMG-20251020-WA0117.jpg',
        alt: 'Réhabilitation des plantations'
      },
      {
        url: '/IMG-20251020-WA0118.jpg',
        alt: "Travaux d'entretien"
      }
    ],
    formation: [
      {
        url: '/image0.jpeg',
        alt: 'Partenariat Enabel et SAC3'
      },
      {
        url: '/image1.jpeg',
        alt: 'Équipe SAC3 en action'
      }
    ]
  };

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Actions de Développement</h2>
            <p className="text-lg text-green-50 leading-relaxed mb-6">
              Bâtir un avenir durable pour les communautés Ekonda
            </p>
            <p className="text-lg text-green-100 leading-relaxed">
              SAC3 s'engage à travers des initiatives structurantes à fort impact socio-économique dans le territoire de Bikoro, province de l'Équateur. Nos projets sont conçus pour répondre aux défis locaux en proposant des solutions durables et en renforçant la résilience des communautés.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-green-600 text-white text-6xl font-bold px-6 py-3 rounded-lg mb-6">
                01
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Agriculture Durable : Le Projet "Crédit Cacao"
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Partenariat Enabel</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Dans le cadre d'une consultance avec Enabel pour la mise en œuvre des programmes PEREDDMO, le SAC3 a été invité en 2022 à une discussion portant sur la filière cacao, en raison de son expertise dans ce domaine. À la suite de cet échange, un partenariat a été envisagé pour la production de plants de cacaoyers.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Contexte et Enjeux</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le cacao représente une filière stratégique pour la région, mais de nombreuses plantations étaient à l'abandon faute de moyens financiers pour leur entretien et leur relance. Cette situation a entraîné une baisse drastique des revenus pour les planteurs et une dégradation du tissu économique local. Le projet "Crédit Cacao" a été initié pour inverser cette tendance en apportant un soutien financier et technique ciblé.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Notre Approche</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le modèle du projet repose sur l'octroi de micro-crédits aux cacaoculteurs pour la restauration de leurs plantations. Ce financement permet l'achat d'outils, de plants et le paiement de la main-d'œuvre nécessaire à la réhabilitation des cacaoyers. Un contrat est établi avec chaque bénéficiaire, définissant les modalités de remboursement et assurant un suivi technique rigoureux pour garantir le succès de la récolte.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                {projectImages.cacao.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Impacts et Perspectives</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le projet "Crédit Cacao" a déjà permis de revitaliser plusieurs hectares de plantations, générant des revenus stables pour des dizaines de familles. À terme, nous visons à faire de la filière cacao un moteur de développement économique durable pour tout le secteur des Ekonda, en améliorant la qualité de la production et en facilitant l'accès aux marchés.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                {projectImages.formation.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-orange-600 text-white text-6xl font-bold px-6 py-3 rounded-lg mb-6">
                02
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Sécurité Alimentaire : Le Projet "Protéines d'Avenir"
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Contexte et Enjeux</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La malnutrition et la carence en protéines animales constituent un problème de santé publique majeur dans le secteur des Ekonda. Le manque d'accès à une alimentation équilibrée freine le développement des enfants et affaiblit la population. Pour répondre à ce défi, SAC3 a lancé un programme ambitieux d'élevage avicole.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Notre Approche</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous proposons le nom "Protéines d'Avenir" pour ce projet, qui reflète sa mission de garantir un futur plus sain pour les communautés. Le projet consiste à mettre en place des unités d'élevage de poules pondeuses et de poulets de chair. Nous formons les bénéficiaires aux techniques d'élevage modernes, à la gestion sanitaire des volailles et à la commercialisation des produits (œufs et viande). L'objectif est de créer une filière avicole locale, rentable et durable.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Impacts et Perspectives</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Protéines d'Avenir" contribue directement à l'amélioration de la sécurité alimentaire et nutritionnelle des ménages. En plus de fournir une source de protéines de haute qualité, le projet génère des revenus complémentaires pour les familles, en particulier pour les femmes qui sont souvent en première ligne de cette activité. Nous prévoyons d'étendre ce programme à plusieurs villages pour maximiser son impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-blue-600 text-white text-6xl font-bold px-6 py-3 rounded-lg mb-6">
                03
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Autonomisation des Femmes : Le Projet d'Atelier de Couture
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Contexte et Enjeux</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Les filles-mères sont souvent confrontées à l'exclusion sociale et à la précarité économique. Sans formation ni opportunités d'emploi, elles peinent à subvenir à leurs besoins et à ceux de leurs enfants. SAC3 est convaincu que l'autonomisation de ces jeunes femmes est une clé du développement communautaire.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Notre Approche</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous envisageons la création d'un grand atelier de couture pour offrir une formation professionnelle qualifiante aux filles-mères. Ce projet leur permettra d'acquérir des compétences techniques en couture, en broderie et en gestion d'une petite entreprise. L'atelier fonctionnera également comme une coopérative de production, où les femmes pourront confectionner et vendre leurs créations.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Impacts et Perspectives</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ce projet vise à restaurer la dignité et l'autonomie financière des filles-mères. En leur donnant un métier et un cadre de travail solidaire, nous leur offrons les moyens de construire un avenir meilleur pour elles-mêmes et leurs enfants. À long terme, cet atelier de couture a le potentiel de devenir un pôle d'excellence artisanale dans la région, valorisant les savoir-faire locaux et créant une dynamique économique positive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Rejoignez Notre Mission</h2>
            <p className="text-xl text-green-50">
              Ensemble, bâtissons un avenir durable pour les communautés Ekonda
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
