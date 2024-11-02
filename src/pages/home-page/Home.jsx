import Hero from "../../components/HomeUI/HomeSecOne";
import WhyChooseUs from "../../components/HomeUI/HomeSecTwo";
import FlagshipProducts from "../../components/HomeUI/HomeSecThree";
import Testimonials from "../../components/HomeUI/HomeSecFour";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
      <main className="flex-grow">
        <Header/>
        <Hero/>
        <WhyChooseUs/>
        <FlagshipProducts/>
        <Testimonials/>
        <Footer/>
      </main>
    );
  };
  
  export default Home;