import BranchesAndSocial from "../../components/ContactUI/ContactUiFive";
import ContactUiFour from "../../components/ContactUI/ContactUiFour";
import ContactUiOne from "../../components/ContactUI/ContactUiOne";
import ContactUiTwo from "../../components/ContactUI/ContactUiTwo";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
    return (
      <div className="bg-gray-100 font-sans">
        <Header/>
        <ContactUiOne/>
        <main className="container mx-auto px-4 py-8">
          <ContactUiTwo/>
          <BranchesAndSocial/>
          <ContactUiFour/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Contact;