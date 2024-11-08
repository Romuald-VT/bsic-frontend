/* eslint-disable react/prop-types */
import { useState } from "react"
import { createPortal } from "react-dom"
import { IoTrash } from "react-icons/io5"
import { Tooltip } from "react-tooltip"

import DeleteDialogBox from "./modals/deletionModal"

const DeleteButton=({item})=>{

    const[showModal,setShowModal] = useState(false)

    return(

        <>
           <buttom className="w-5 h-5 text-blue-600" onClick={()=>{setShowModal(true)}} id="deleteMsgBox"><IoTrash/></buttom>
           <Tooltip anchorSelect="#deleteMsgBox" place="top">
            Supprimer ce compte
           </Tooltip>
           {
             showModal && createPortal(<DeleteDialogBox showModal={()=>{setShowModal(false)}} email={item.email}/>,document.body)
           }
        </>
    )
}

export default DeleteButton 