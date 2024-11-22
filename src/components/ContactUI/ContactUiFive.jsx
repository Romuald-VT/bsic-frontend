
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Structure des données pour les agences
const branches = [
  {
    name: 'Siege General',
    address: 'Plateau Avenue Nogues BP 10323 ',
    Tel:"+2250170076076",
    mail:"support@bsc-bank.com",
    city: 'Abidjan 01 Abidjan Cote-D\'ivoire',
    hours: [
      { day: 'Lundi - Vendredi', time: '9h - 17h' },
      { day: 'Samedi', time: '10h - 14h' },
    ],
  },
  {
    name: 'Agence Cameroun',
    address: '3M3W+2WW  ',
    Tel:"+237694021302",
    city: 'Rue , Douala ',
    hours: [
      { day: 'Lundi - Vendredi', time: '9h - 18h' },
      { day: 'Samedi', time: '10h - 15h' },
    ],
  },
  {
    name: "Succursale d'Uptown",
    address: '789 Wealth Lane',
    city: 'New York, NY 10003',
    hours: [
      { day: 'Lundi - Vendredi', time: '8h:30 - 17h:30' },
      { day: 'Samedi', time: '9h - 13h' },
    ],
  },
];

// Structure des données pour les réseaux sociaux
const socialLinks = [
  { href: '#', icon: faFacebookF },
  { href: '#', icon: faTwitter },
  { href: '#', icon: faLinkedinIn },
  { href: '#', icon: faInstagram },
];

const BranchesAndSocial = () => {
  return (
    <>
      {/* Section des agences */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Visitez nos succursales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
              <p className="mb-2">{branch.address}</p>
              <p className="mb-2">{branch.city}</p>
              <p className="mb-2">{branch.Tel}</p>
              <p className="mb-2">{branch.mail}</p>
              {branch.hours.map((hour, idx) => (
                <p key={idx} className="mb-2">
                  {hour.day}: {hour.time}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Section des réseaux sociaux */}
      <section className="bg-blue-500 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Connectez-vous avec nous</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-blue-300 transition duration-300">
              <FontAwesomeIcon icon={link.icon} className="text-3xl" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default BranchesAndSocial;
