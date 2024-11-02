
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCommentDots, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Données structurées pour les options de contact
const contactOptions = [
  {
    icon: faPhoneAlt,
    title: "Appelez-nous",
    description: "Service clientèle 24/7",
    linkText: "1-800-123-4567",
    link: "tel:+18001234567",
  },
  {
    icon: faCommentDots,
    title: "Discuter avec nous",
    description: "Disponible de 8h à 20h",
    buttonText: "Démarrer la discussion",
    buttonAction: () => {
      alert('Starting chat...');
    },
  },
  {
    icon: faEnvelope,
    title: "Nous envoyer un courriel",
    description: "Nous répondrons dans les 24 heures",
    linkText: "support@bsc-bank.com",
    link: "mailto:support@bsc-bank.com",
  },
];

const ContactUiTwo = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Comment pouvons-nous vous aider ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactOptions.map((option, index) => (
          <div key={index} className="text-center">
            <FontAwesomeIcon icon={option.icon} className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="mb-2">{option.description}</p>
            {option.link ? (
              <a href={option.link} className="text-blue-500 hover:underline">
                {option.linkText}
              </a>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={option.buttonAction}
              >
                {option.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUiTwo;
