import TranfertUiOne from "../../components/ServiceUI/TranfertUI/TranfertUiOne";
import TranfertUiTwo from "../../components/ServiceUI/TranfertUI/TransfertUiTwo";
import TranfertUiThree from "../../components/ServiceUI/TranfertUI/TransfertUiThree";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const MoneyTransfer = () => {
    return (
      <main className="flex-grow">
      <Header/>
      <TranfertUiOne/>
      <TranfertUiTwo/>
      <TranfertUiThree/>
      <Footer/>
      </main>
    );
  };
  
  export default MoneyTransfer;