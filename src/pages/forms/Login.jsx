/* eslint-disable no-unused-vars */
import{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify'
import axios from 'axios'
import { loginSuccess} from '../../store/authSlice';
import 'react-toastify/ReactToastify.css'


  const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState('')
  const [display,setDisplay] = useState(false)
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  
  useEffect(()=>{
    setTimeout(()=>{
      setDisplay(false)
    },5000)

    clearTimeout()
  },[display])

    const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData()
    dataToSend.append('username',username)
    dataToSend.append('password',password)
    try
    {
      const response = await axios.post('https://bsic-api.up.railway.app/api/users/login',dataToSend,{headers:{'Content-Type':'application/json'}})
      if( response.status ===200)
      {
         const {user,token} = response.data
         let k = response.data.user.username
         localStorage.setItem('token',token)
         dispatch(loginSuccess({user,token}))
         
      }
      if(response.status===404)
      {
         setErrorMessage(response.data.message)
      }
    }
    catch(err)
    {
       toast.error(err.error)
    }
  };

    
    

  return (
    <main className="flex-grow container mx-auto px-4 py-8">

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Identification Administrateur</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse e-mail
              </label>
              <input
                type="text"
                id="text"
                name="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
                  checked={false}
                  onChange={() => {}}
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Se souvenir de moi
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                S&apos;identifier
              </button>
            </div>
          </form>
          <p className="text-center mt-4 text-sm">
          {display && <p className='text-center text-red-700 mt-5 text-sm'>{errorMessage}</p>}
          </p>
          
          
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
