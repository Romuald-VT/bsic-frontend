/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"


const AccountButton = ({showModal,email})=>{
    
    const[accountType,setAccountType] = useState('')

    const handleSubmit = async()=>{
        const formData = new FormData()
        formData.append('accountType',accountType)
        try{
            const token = localStorage.getItem('token')
           const response = await axios.post(`http://localhost:4000/api/customers/acounttype/${email}`,formData,{headers:{"Content-type":"application/json",Authorization:token}})
           if(response.status!==200)
           {
             console.log(response.data)
             toast.error(`erreur: ${response.data.message}`)
           }
           toast.success(`le compte de ${response.data.firstname} ${response.data.lastname} a un status de ${response.data.accountType}`)
        }
        catch(err)
        {
            toast.error(err)
        }
    }

    return(
        <>
            <div 
            onClick={showModal}
            className="fixed inset-0 bg-slate-700/40 ">

            </div>
            <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[180px] flex flex-col">
            <div className="w-full h-9 bg-blue-700">
                <div className="text-white font-normal relative top-2 left-2">
                    modifier le type de compte
                </div>
                    <button className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm" onClick={showModal}>x</button>
            </div>
            <div>
                <div className="relative top-7  w-[320px] px-4">
                    <select className="w-full h-10 py-3" value={accountType} onChange={(e)=>{setAccountType(e.target.value)}}>
                        <option value={"Compte Epargne"}>Compte Epargne</option>
                        <option value={"Compte Courant"}>Compte Courant</option>
                        <option value={"Compte OffShore"}>Compte offshore</option>
                    </select>
                </div>
                <div>
                    <button
                    className="relative top-14 left-20 text-white bg-blue-600 w-40 h-10 px-3 py-2 font-normal rounded-md"
                    onClick={handleSubmit}>mettre a Jour</button>
                </div>
                
            </div>
            </div>
        </>
    )

}

export default AccountButton