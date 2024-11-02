import CreditCardUIOne from "../../components/ProductUI/CreditCardUI/CreditCardUIOne";
import CardInfo from "../../components/ProductUI/CreditCardUI/CreditCardUIThree";
import CreditCardsSection from "../../components/ProductUI/CreditCardUI/CreditCardUITwo";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const CreditCard = () => {
    return (
      <div className="bg-gray-100 font-sans">
        <Header/>
        <CreditCardUIOne/>
        <main className="container mx-auto px-4 py-8">
          <CreditCardsSection/>
          <CardInfo/>
        </main>
        <Footer/>
      </div>
      
    );
  };
  
  export default CreditCard;