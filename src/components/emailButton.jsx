/* eslint-disable react/prop-types */
import { useState } from "react"
import { createPortal } from "react-dom"
import { FaPen } from "react-icons/fa"
import EmailModal from "./modals/emailModal"
import { Tooltip } from "react-tooltip"

const EmailButton = ({userData})=>{

    const [showModal,setShowModal] = useState(false)
    return(
        <>
           <button className="w-5 h-5 text-blue-600" 
           onClick={()=>{setShowModal(true)}} id="email"><FaPen/></button>
           <Tooltip anchorSelect="#email" place="top">
            Notifier le Client
           </Tooltip>
           {
             showModal && createPortal(<EmailModal showModal={()=>{setShowModal(false)}} data={userData}/>,document.body)
           }
        </>
    )
}

export default EmailButton