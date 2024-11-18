/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"


const AmountDialog = ({number,showModal,email})=>{
    
    if(!number) number=0
    const [amount,setAmount] = useState(number)
    
    const handleChange = (e)=>{
        setAmount(e.target.value)
    }

    const handleSubmit = async()=>{
       
        const token = localStorage.getItem("token")
        const formData = new FormData()
        formData.append('amount',amount)
         try{
            const response  = await axios.post(`https://bsic-api.up.railway.app/api/customers/info/${email}`,formData,{headers:{"Content-Type":'application/json',Authorization:token}})
            if(response.status !== 200)
            {   
                toast.error("un incident s'est produit !")
            }
            toast.success(`le compte de ${response.data.firstname} ${response.data.lastname} a  un montant de ${response.data.amount} XAF`)
            
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
                       modifier le solde
                   </div>
                    <button className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm" onClick={showModal}>x</button>
              </div>
            <div>
                <div className="relative top-10 w-[320px] px-4">
                    <input
                    className="w-full h-8 "
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                    />
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
export default AmountDialog