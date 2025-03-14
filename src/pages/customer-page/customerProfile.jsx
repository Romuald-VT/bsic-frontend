import { useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';
import { logout } from '../../store/customerSlice';
import axios from 'axios';
import {ToastContainer ,toast } from 'react-toastify';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const dispatch=useDispatch()
    
    const handleLogout =()=>{
        localStorage.removeItem("customer")
        localStorage.removeItem("")
        dispatch(logout())
    }
      // Si vous souhaitez récupérer des données dynamiquement, vous pouvez utiliser useEffect
      useEffect(() => {
            const getUserData = async()=>{
                try {
                    const customer = localStorage.getItem("customer")
                    console.log(JSON.parse(customer))
                    let code = JSON.parse(customer).id
                    let token = JSON.parse(customer).user
                    const response = await axios.get(`https://bsic-api-production-6fde.up.railway.app/api/customers/v1/info/code/${code}`,{headers:{Authorization:token}})

                    if(response.status === 200)
                    {
                        setUserData(response.data.data)
                      
                    }
                    else{
                        toast.error("erreur de chargement des donnees !")
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
            getUserData()
            console.log(userData)
      },[]);
    
      return (
        <div className="max-w-[800px] mx-auto bg-white rounded-[15px] shadow-lg p-[30px]">
          <div className="flex items-center gap-5 mb-[30px]">
            <div className="w-[150px] h-[150px] rounded-full bg-[#e0e0e0] flex items-center justify-center overflow-hidden border-[3px] border-primary">
              <svg viewBox="0 0 24 24" className="w-[80px] h-[80px] fill-white">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold  text-blue-500">Profil Client</h1>
          </div>
          <div className="mb-5">
           Nous vous informons que votre compte aupres de la BSIC Cameroun est en regle.Cependant afin de pouvoir exploiter pleinement
           votre compte il est necessaire de fournir des justificatifs aupres de la COBAC. Nous vous invitons a vous raprocher de notre agence
           ou a contacter notre service client pour les infornations necessaire sur les documents a fournir.
           Nous vous remercions pour votre comprehension et restons a votre disposition pour toutes questions
          </div>
    
          <div className="mb-5">
            <div className="font-semibold t text-blue-500 mb-1">Nom complet</div>
            <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
              {userData.firstname+" "+userData.lastname}
            </div>
          </div>
    
          <div className="mb-5">
            <div className="font-semibold  text-blue-500 mb-1">Email</div>
            <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
              {userData.email}
            </div>
          </div>
    
          <div className="mb-5">
            <div className="font-semibold text-blue-500 mb-1">Type de compte</div>
            <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
              {userData.accountType}
            </div>
          </div>
          <div className="mb-5">
            <div className="font-semibold text-blue-500 mb-1">Numero de Compte</div>
            <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
              {userData.accountNumber}
            </div>
          </div>
    
    
          <div className="mt-[30px] pt-[20px] border-t-[2px] border-t-[#f5f6fa]">
            <div className="font-semibold text-blue-500 mb-1">Solde</div>
            <div className="text-base  p-[10px] bg-[#f5f6fa] rounded-md mt-1">
              {userData.amount+"  FCFA"}
            </div>
          </div>
          <button className="bg-blue-500 text-white border-none py-3 px-8 rounded-full cursor-pointer w-full text-base mt-8 transition-transform duration-200 hover:shadow-lg hover:scale-105" onClick={handleLogout}>deconnexion</button>
          <ToastContainer/>
        </div>
      );
    }
    


export default UserProfile