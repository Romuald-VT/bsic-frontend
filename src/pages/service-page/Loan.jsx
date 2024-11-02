import LoanUiOne from "../../components/ServiceUI/LoanUI/LoanUiOne";
import LoanUiThree from "../../components/ServiceUI/LoanUI/LoanUiThree";
import LoanSection from "../../components/ServiceUI/LoanUI/LoanUiTwo";
import WhyChooseLoans from "../../components/ServiceUI/LoanUI/LoanUiFour";
import FAQSection from "../../components/ServiceUI/LoanUI/LoanUiFive";
import LoanApplicationForm from "../../components/ServiceUI/LoanUI/LoanUiSix";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Loan = () => {
    return (
      <main className="flex-grow">
        <Header/>
        <LoanUiOne/>
        <LoanSection/>
        <LoanUiThree/>
        <WhyChooseLoans/>
        <FAQSection/>
        <LoanApplicationForm/>
        <Footer/>
      </main>
    );
  };
  
  export default Loan;