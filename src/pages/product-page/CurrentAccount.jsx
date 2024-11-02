import CurrentAccountUiOne from "../../components/ProductUI/CurrentAccountUI/CurrentAccountUiOne";
import CurrentAccountUiThree from "../../components/ProductUI/CurrentAccountUI/CurrentAccountUiThree";
import CurrentAccountUiTwo from "../../components/ProductUI/CurrentAccountUI/CurrentAccountUiTwo";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";


const CurrentAccount = () => {
    return (
      <div className="bg-gray-100 font-sans">
        <Header/>
        <CurrentAccountUiOne/>
        <main className="container mx-auto px-4 py-8">
          <CurrentAccountUiTwo/>
          <CurrentAccountUiThree/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default CurrentAccount;