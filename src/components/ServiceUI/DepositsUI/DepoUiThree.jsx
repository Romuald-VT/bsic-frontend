
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faBolt, faThumbsUp, faClock } from "@fortawesome/free-solid-svg-icons";

// Structure des données pour les avantages de la banque
const depositBenefits = [
  {
    icon: faShieldAlt,
    title: "Sécurité",
    description: "Vos fonds sont protégés grâce à nos systèmes de sécurité de pointe.",
  },
  {
    icon: faBolt,
    title: "Vitesse",
    description: "Vos dépôts sont rapidement crédités sur votre compte.",
  },
  {
    icon: faThumbsUp,
    title: "Simplicité",
    description: "Nos procédures de dépôt sont simples et intuitives.",
  },
  {
    icon: faClock,
    title: "Disponibilité",
    description: "De nombreuses options de dépôt sont à votre disposition.",
  },
];

const DepositBenefits = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre banque pour vos dépôts ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {depositBenefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <FontAwesomeIcon icon={benefit.icon} className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepositBenefits;
