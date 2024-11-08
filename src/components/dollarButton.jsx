/* eslint-disable react/prop-types */
import { useState } from "react"
import { createPortal } from "react-dom"
import { FaDollarSign } from "react-icons/fa6"
import AmountDialog from './modals/amountModal'
import { Tooltip } from "react-tooltip"

const DollarButton = ({amount, email})=>{
    
    const [showModal,setShowModal] = useState(false)
    return(
        <>
           <button className="w-5 h-5 text-blue-600" 
           onClick={()=>{setShowModal(true)}} id="amount"><FaDollarSign/></button>
           <Tooltip anchorSelect="#amount" place="top">
            Modifier le montant du compte
           </Tooltip>
           {
             showModal && createPortal(<AmountDialog showModal={()=>{setShowModal(false) }} number={amount} email={email}/>,document.body)
           }
        </>
    )
}

export default DollarButton