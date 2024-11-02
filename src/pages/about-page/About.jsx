import AboutUIOne from "../../components/AboutUI/AboutUIOne";
import AboutUIThree from "../../components/AboutUI/AboutUIThree";
import AboutUITwo from "../../components/AboutUI/AboutUITwo";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
    return (
      
      <div className="bg-gray-100 font-sans">
        <Header/>
        <AboutUIOne/>
        <main className="container mx-auto px-4 py-8">
          <AboutUITwo/>
          <AboutUIThree/>
        </main>
      <Footer/>
      </div>
    );
  };
  
  export default About;