
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { loginSuccess } from '../../store/customerSlice';

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { customer } = useSelector((state) => state.customer);
  const dispatch = useDispatch()

  const handleSubmit = async(e) => {
      e.preventDefault()

      const formData = new FormData()
      formData.append("email",email)
      formData.append("password",password)

      try{
           const response =await  axios.post("http://localhost:4000/api/customers/accounts/login",formData,{headers:{"Content-Type":"application/json"}})
           if(response.status===200)
           {
           
            localStorage.setItem("usertoken",response.data.usertoken)
            localStorage.setItem("customer",response.data.customer)
            dispatch(loginSuccess(response.data))
            localStorage.setItem("customerEmail",response.data.customer.email)
           }
           toast.error(response.data.message || response.data.error)
           console.log(customer)
      }
      catch(error)
      {
          
          toast.error(error)
      }
  }
    

    

  return (
    <div className="w-full max-w-[400px] mx-auto bg-white rounded-[15px] shadow-lg p-[30px]">
      <div className="text-center mb-[30px]">
        <h1 className="text-2xl font-bold text-text-color">Connexion</h1>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-secondary-color">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="p-[12px] border-2 border-background rounded-md focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold text-secondary-color">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="p-[12px] border-2 border-background rounded-md focus:outline-none focus:border-primary"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-[12px] rounded-md font-semibold hover:bg-secondary transition-colors">
          Login
        </button>
      </form>
      <div className="text-center mt-5">
        <p>vous n&apos;avez pas de compte? <Link to="/member-form" className="text-primary hover:underline">s&apos;inscrire</Link></p>
      </div>
    </div>
  );
}


export default CustomerLogin
