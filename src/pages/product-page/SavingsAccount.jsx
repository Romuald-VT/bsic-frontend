import SavingAccountUiOne from "../../components/ProductUI/SavingAccountUI/SavingAccountUiOne";
import SavingsFAQ from "../../components/ProductUI/SavingAccountUI/SavingAccountUiThree";
import SavingsSection from "../../components/ProductUI/SavingAccountUI/SavingAccountUiTwo";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const SavingAccount = () => {
    return (
      <div className="bg-gray-100 font-sans">
        <Header/>
        <SavingAccountUiOne/>
        <main className="container mx-auto px-4 py-8">
          <SavingsSection/>
          <SavingsFAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default SavingAccount;