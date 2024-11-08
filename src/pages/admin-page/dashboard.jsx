/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
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


const Table = ()=>{

    const [dataApi,setDataApi] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    const itemParPages = 10
    const lastIndex = itemParPages*currentPage
    const firstIndex = (currentPage-1)*itemParPages
    const records = dataApi.slice(firstIndex,lastIndex)
    const nPages = Math.ceil(dataApi.length/itemParPages)
    const numbers = [...Array(nPages+1).keys()].slice(1)

    useEffect(()=>{
         const getData = async()=>{
            try{
                const token = localStorage.getItem('token')
                const response = await axios.get(`https://bsic-api.up.railway.app/api/customers/all`,{headers:{'Authorization':token}})
                setDataApi(response.data.customers)
                
            }
            catch(err)
            {
                toast.error(err)
            }
         }
       
         getData()
    })
    // methodes chargee de gerer la pagination 
    const prevPage = ()=>{
        if(currentPage !== firstIndex)
        {
          setCurrentPage(currentPage - 1)
        }
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
                    <div className="flex flex-row">
                         <div>
                            <FaUser style={{fontSize:30, color:'blue'}}/>
                         </div>
                         <p>{}</p>
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
                        <th className="px-4 py-2">ville</th>
                        <th className="px-4 py-2">localisation</th>
                        <th className="px-4 py-2">type_de_compte</th>
                        <th className="px-4 py-2">Montant</th>
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
                            <td className="px-4 py-2">{item.town}</td>
                            <td className="px-4 py-2">{item.location}</td>
                            <td className="px-4 py-2">{item.accountType}</td>
                            <td className="px-4 py-2">{item.amount+" XAF"}</td>
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