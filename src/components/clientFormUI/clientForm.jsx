/* eslint-disable react/prop-types */

import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"


const ClientForm =({setModal})=>{
    
    const[formData, setFormData] = useState({
        firstname:"",
        lastname:'',
        email:"",
        phone:'',
        amount:'',
        accountNumber:'',
    })
    const [accountType,setAccountType] = useState("")
    const [job,setJob] = useState("")


    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    }
    const handleSubmit = async(e)=>{

        e.preventDefault()
        const formDataToSend = new FormData()
        formDataToSend.append('firstname',formData.firstname)
        formDataToSend.append('lastname',formData.lastname)
        formDataToSend.append('email',formData.email)
        formDataToSend.append("phone",formData.phone)
        formDataToSend.append("accountNumber",formData.accountNumber)
        formDataToSend.append("amount",formData.amount)
        formDataToSend.append("job",job)
        formDataToSend.append("accountType",accountType)

        try {
            const token = localStorage.getItem('token')
            console.log(formDataToSend)
            const response = await axios.post('https://bsic-api.production.up.railway.app/api/customers/accounts/add',formDataToSend,{headers:{"Content-Type":"application/json",Authorization:token}})
            if(response.status!==201)
            {
              toast.error(response.data.message)
            }
            toast.success("operation reussie")
        } catch (error) {
            toast.error(error.message)
        }

    }

    const handleReset = ()=>{

        setFormData({
            firstname:"",
            lastname:'',
            email:"",
            phone:'',
            amount:"",
            accountNumber:'',
        })
        setJob('')
        setAccountType('')
    }
    return(
        <>
            <div onClick={setModal}
            className="fixed inset-0 bg-slate-700/40 ">
            </div>
            <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[440px] flex flex-col">
                <div className="w-full h-9 bg-blue-700">
                   <div className="text-white font-normal relative top-2 left-2">
                       Nouveau Client
                   </div>
                    <button className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm" onClick={setModal}>x</button>
              </div>
              <form onSubmit={handleSubmit} className="relative top-5 left-3 w-[320px] flex flex-col">
                    <div>
                        <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="prenom"
                        required
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                        placeholder="nom"
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="email"
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div>
                        <input
                        type="phone"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="telephone"
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div className="">
                            <select className="w-full h-7 " value={job} onChange={(e)=>{setJob(e.target.value)}}>
                            <option value={""}>selectionner une activite professionnelle</option>
                                <option value={"Salarie(e)"}>Salarie(e)</option>
                                <option value={"Independant"}>Independant</option>
                                <option value={"Entrepreneur"}>Entrepreneur</option>
                                <option value={"Etudiant"}>Etudiant</option>
                            </select>
                        </div>
                    <div>
                        <input
                        type="number"
                        id="accountNumber"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="numero de compte"
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div>
                        <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        placeholder="montant"
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div className="mb-3">
                            <select className="w-full h-7 " value={accountType} onChange={(e)=>{setAccountType(e.target.value)}}>
                            <option value={""}>selectionner un type de compte</option>
                                <option value={"Compte Epargne"}>Compte Epargne</option>
                                <option value={"Compte Courant"}>Compte Courant</option>
                                <option value={"Compte OffShore"}>Compte OffShore</option>
                            </select>
                        </div>
                    
                    <div className="flex flex-row gap-[120px] mb-2">
                        <button className=" bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500" type="submit">Envoyer</button>
                        <button className=" bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500" onClick={handleReset}>reinitialiser</button>
                    </div>
                    
                </form>


            </div>
        </>
    )
}

export default ClientForm