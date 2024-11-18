
import { useState } from "react"
import { createPortal } from "react-dom"
import { FaUser } from "react-icons/fa6"
import ClientForm from "./clientFormUI/clientForm"

const AddCustomerPanel =()=>{
     
    const [showModal,setShowModal] = useState(false)
    return(
        <>
            <button onClick={()=>{setShowModal(true)}}  className="w-[170px] h-[35px] bg-blue-600 text-white flex flex-row gap-4 relative left-10 -top-4 p-2 rounded-lg" >
               <FaUser/>
               <span>Nouveau Client</span>
            </button>
            {
                showModal && createPortal(<ClientForm setModal={()=>{setShowModal(false)}}/>,document.body)
            }
        </>
    )
}

export default AddCustomerPanel