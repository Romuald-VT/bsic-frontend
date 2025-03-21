/* eslint-disable no-unused-vars */
import { useEffect, useState ,useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify'
import {logout} from '../../store/authSlice'
import 'react-toastify/ReactToastify.css'
import logo from '../../assets/logo.png'
import { FaUser} from "react-icons/fa6";
import DollarButton from "../../components/dollarButton";
import AccountType from "../../components/accountButton";
import EmailButton from "../../components/emailButton";
import DeleteButton from "../../components/deletionPanel";
import AddCustomerPanel from "../../components/addCustomerPanel";


const Table = ()=>{

    const [dataApi,setDataApi] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [accountType,setAccountType] = useState('')
    const [phone,setPhone] = useState('')
    const [job,setJob] = useState('')


    useEffect(()=>{
         const getData = async()=>{
            const prodd_url = `https://bsic-api-production-6fde.up.railway.app/api/customers/info/all`
            try{
                const token = localStorage.getItem('token')
                const response = await axios.get(prodd_url,{headers:{'Authorization':token}})
                setDataApi(response.data.customers)
                
            }
            catch(err)
            {
                toast.error(err)
            }
         }
       
         getData()
    })

    const filteredData = useMemo(()=>{
        return dataApi.filter((item)=>{
            const isLastnameMatch = item.lastname.toLowerCase().includes(lastname.toLowerCase());
            const isEmailMatch = item.email.toLowerCase().includes(email.toLowerCase());
            const isPhoneMatch = item.phone.toLowerCase().includes(phone.toLowerCase());
            const isAccountTypeMatch = item.accountType.toLowerCase().includes(accountType.toLowerCase());
            const isJobMatch = item.job.toLowerCase().includes(job.toLowerCase());
            return isLastnameMatch && isEmailMatch && isPhoneMatch && isAccountTypeMatch && isJobMatch
        })
    },[dataApi,lastname,email,phone,accountType,job])

    const itemParPages = 10
    const lastIndex = itemParPages*currentPage
    const firstIndex = (currentPage-1)*itemParPages
    const records = filteredData.slice(firstIndex,lastIndex)
    const nPages = Math.ceil(filteredData.length/itemParPages)
    const numbers = [...Array(nPages+1).keys()].slice(1)

   
    // methodes chargee de gerer la pagination 
    const prevPage = ()=>{
       
      }
      
      const changePage = (id)=>{
          setCurrentPage(id)
      }
      
      const nextPage = () =>{
          
        if(currentPage !== lastIndex)
        {
            setCurrentPage(currentPage+1)
        }
      }

    const handleLogout = ()=>{
        dispatch(logout());
    }
/************************************************************* */
// gestion des actions
/************************************************************* */
  
// methode permetant de gerer la suppression des donnees via l'email 
    
    return(
        <div className="">
            <div className="w-full h-36 flex flex-column">
                <div className="relative top-5 left-2">
                    <img src={logo} alt="logo-bsic"/>
                </div>
                <h2 className="text-blue-600 relative left-[350px] top-12 font-semibold text-[40px]">BSIC-BANK DASHBOARD </h2>
                <div className="relative top-10 left-[600px] flex flex-row w-24 h-4">
                    
                    <button className="border bg-blue-600 text-white font-medium w-28 h-10 rounded-md flex flex-col gap-3" onClick={handleLogout}>
                        <span className='relative top-2 left-1' >deconnexion</span>
                    </button>
                    
                </div>
                
            </div>
            <div className="w-full h-18 flex flex-column mt-5">
                 <div>
                    <AddCustomerPanel/>
                 </div>
                    <div className="flex flex-row gap-5 relative -top-2 left-44">
                        <div>
                            <input type="text"
                            name="lastname"
                            value={lastname}
                            onChange={(e)=>{setLastname(e.target.value)}}
                            placeholder="Nom"/>
                        </div>
                        <div>
                            <input type="text"
                            name="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="Email"/>
                        </div>
                        <div>
                            <input type="text"
                            name="phone"
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            placeholder="telephone"/>
                        </div>
                        <div className="w-[320px]">
                            <select className="w-full h-7 " value={accountType} onChange={(e)=>{setAccountType(e.target.value)}}>
                            <option value={""}>selectionner un type de compte</option>
                                <option value={"Compte Epargne"}>Compte Epargne</option>
                                <option value={"Compte Courant"}>Compte Courant</option>
                                <option value={"Compte OffShore"}>Compte offshore</option>
                            </select>
                        </div>
                        <div className="w-[320px]">
                            <select className="w-full h-7 " value={job} onChange={(e)=>{setJob(e.target.value)}}>
                            <option value={""}>selectionner une activite professionnelle</option>
                                <option value={"Salarie(e)"}>Salarie(e)</option>
                                <option value={"Independant"}>Independant</option>
                                <option value={"Entrepreneur"}>Entrepreneur</option>
                                <option value={"Etudiant"}>Etudiant</option>
                            </select>
                        </div>
                    </div>
            </div>
            <table className="w-full table-auto">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-2">prenom</th>
                        <th className="px-4 py-2">nom</th>
                        <th className="px-4 py-2">email</th>
                        <th className="px-4 py-2">telephone</th>
                        <th className="px-4 py-2">activite_professionnelle</th>
                        <th className="px-4 py-2">numero de compte</th>
                        <th className="px-4 py-2">type_de_compte</th>
                        <th className="px-4 py-2">Montant</th>
                        <th className="px-4 py-2">identifiant Unique</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody >
                       {records.map((item,i)=>{
                       return <tr key={i} className="border-b">
                            <td className="px-4 py-2">{item.firstname}</td>
                            <td className="px-4 py-2">{item.lastname}</td>
                            <td className="px-4 py-2">{item.email}</td>
                            <td className="px-4 py-2">{item.phone}</td>
                            <td className="px-4 py-2">{item.job}</td>
                            <td className="px-4 py-2">{item.accountNumber}</td>
                            <td className="px-4 py-2">{item.accountType}</td>
                            <td className="px-4 py-2">{item.amount+" XAF"}</td>
                            <td className="px-4 py-2">{item.customerUUID}</td>
                            <td className="px-4 py-2"><div className="flex flex-row gap-2 ">
                                <DollarButton amount={item.amount} email={item.email}/>
                                <AccountType email={item.email}/>
                                <EmailButton userData={item}/>
                                <DeleteButton item={item}/>
                                </div></td>
                        </tr>
                       })}
                </tbody>
            </table>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm mt-4" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" onClick={prevPage} >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </a>
        {
            numbers.map((item,i)=>{
                return <span key={i}>
                    <a href="#" onClick={()=> changePage(item)} className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">{item}</a>
                    </span>
                   
            })
        }

        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" onClick={nextPage}>
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
            <ToastContainer/>
        </div>
    )

 
}


export default Table