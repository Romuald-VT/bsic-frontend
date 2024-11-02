import DepoUiOne from "../../components/ServiceUI/DepositsUI/DepoUiOne";
import DepositOptions from "../../components/ServiceUI/DepositsUI/DepoUiTwo";
import DepositBenefits from "../../components/ServiceUI/DepositsUI/DepoUiThree";
import MainComponent from "../../components/ServiceUI/DepositsUI/DepoUiFour";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Deposits = () => {
    return (
      <main className="flex-grow">
      <Header/>
      <DepoUiOne/>
      <DepositOptions/>
      <DepositBenefits/>
      <MainComponent/>
      <Footer/>
      </main>
    );
  };
  
  export default Deposits;