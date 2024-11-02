import PropTypes from "prop-types";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: 'Bsc-bank has made managing my finances so much easier. Their mobile app is intuitive and their customer service is top-notch!',
    author: "Sarah J., Small Business Owner",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Michael T., Retired Teacher",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Léa D., Fondatrice de startup",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Thomas B., Artisan boulanger indépendant",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Camille L., Consultante en marketing digital",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Antoine R., Vétérinaire libéral",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Émilie P., Auteure indépendante",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Victor S., Coach sportif à domicile",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Chloé M., Créatrice de bijoux artisanaux",
  },
  {
    quote: "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Nicolas G., Développeur web freelance",
  },
];

// Flèche précédente
const PrevArrow = (props) => {
    const { onClick, className, style } = props; // Assurez-vous que 'onClick' est extrait des props
    return (
      <button
        onClick={onClick}
        className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full focus:outline-none`}
        style={{ ...style, display: "block" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-blue-500" />
      </button>
    );
  };
  
  // Flèche suivante
  const NextArrow = (props) => {
    const { onClick, className, style } = props;
    return (
      <button
        onClick={onClick}
        className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full focus:outline-none`}
        style={{ ...style, display: "block" }}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500" />
      </button>
    );
  };
  
  // Ajout des validations de props avec PropTypes
  PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  
  NextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  
  const Testimonials = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2, // Afficher deux témoignages à la fois
      slidesToScroll: 1, // Défiler un seul témoignage à la fois
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: <PrevArrow />, // Assurez-vous que les flèches sont passées sous forme de composants
      nextArrow: <NextArrow />, // Assurez-vous que les flèches sont passées sous forme de composants
    };
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ce que disent nos clients</h2>
          <Slider {...settings} className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6">
                <p className="mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default Testimonials;