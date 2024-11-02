
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import AboutImg1 from "./../../assets/imga.webp"
import AboutImg2 from "./../../assets/imgb.webp"

// Données structurées pour les valeurs
const coreValues = [
  {
    icon: faHandshake,
    title: 'Confiance',
    description: 'Nous construisons des relations durables basées sur la transparence et la fiabilité.',
  },
  {
    icon: faChartLine,
    title: "L'innovation",
    description: "Nous acceptons le changement et améliorons continuellement nos services pour répondre à l'évolution des besoins.",
  },
  {
    icon: faUsers,
    title: 'Communauté',
    description: 'Nous nous engageons à rendre la pareille et à soutenir les communautés que nous servons.',
  }
];

// Composant JSX
const AboutUs = () => {
  return (
    <div>
      {/* Section Notre Histoire */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={AboutImg1}
              alt="Vintage photo of BSC-Bank's first branch"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
            <p className="text-lg leading-relaxed">
            Fondée en 1950, la BSIC-Bank était à l&apos;origine une petite banque communautaire au cœur de notre ville. Au fil des décennies, nous nous sommes développés aux côtés de nos clients, passant d&apos;une institution locale à un partenaire financier national de confiance. Notre parcours a été marqué par l&apos;innovation, la résilience et un engagement inébranlable envers le bien-être financier de nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Section Nos valeurs */}
      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos valeurs fondamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="text-center">
              <FontAwesomeIcon icon={value.icon} className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Notre Vision */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={AboutImg2}
              alt="Modern BSC-Bank branch interior"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Notre vision</h2>
            <p className="text-lg leading-relaxed">
            À BSC-Bank, nous envisageons un avenir où les services financiers sont intégrés de manière transparente dans la vie des gens, leur permettant de réaliser leurs rêves et d&apos;assurer leur avenir. Nous nous efforçons d&apos;être à la pointe de la technologie bancaire tout en conservant la touche personnelle qui nous définit depuis des générations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
