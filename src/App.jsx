

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home-page/Home";
import Loan from "./pages/service-page/Loan";
import Deposits from "./pages/service-page/Deposits";
import MoneyTransfer from "./pages/service-page/MoneyTransfer";
import CreditCard from "./pages/product-page/CreditCard";
import SavingAccount from "./pages/product-page/SavingsAccount"
import CurrentAccount from "./pages/product-page/CurrentAccount"
import About from "./pages/about-page/About"
import Contact from "./pages/contact-page/Contact";
import LoginForm from "./pages/forms/Login";
//import Signup from "./pages/forms/Signup";
import MemberForm from "./pages/forms/MemberForm"
import Table from "./pages/admin-page/dashboard";
import { useSelector } from "react-redux";
import NotFound from "./pages/404-notFound-page/notFoundPage";
import UserProfile from "./pages/customer-page/customerProfile";
import CustomerLogin from "./pages/forms/customerForm";
function App() {
  
 const {user} = useSelector((state)=>state.auth)
 const {customer} = useSelector((state)=>state.customer)
  
  return (
    
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/loans" element={<Loan/>} />
            <Route path="/deposits" element={<Deposits/>} />
            <Route path="/money-transfer" element={<MoneyTransfer/>}/>
            <Route path="/credit-card" element={<CreditCard/>} />
            <Route path="/savings-account" element={<SavingAccount/>} />
            <Route path="/current-account" element={<CurrentAccount/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/bs-admin" element={user?<Navigate to='/dashboard'/>:<LoginForm/>} />
            <Route path="/signup" element={<MemberForm/>} />
            <Route path="/member-form" element={<MemberForm/>} />
            <Route path='/dashboard' element={user?<Table/>:<Navigate to='/bs-admin'/>}/>
            <Route path='/customer' element={customer?<UserProfile/>:<Navigate to="/login"/>}/>
            <Route path='/login' element={customer?<Navigate to="/customer"/>:<CustomerLogin/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
