/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify"
import axios from "axios"

const DeleteDialogBox =({email,showModal})=>{
 
    const handleDeletion = async()=>
        {
            const production_url = `https://bsic-api.production.up.railway.app/api/customers/info/${email}`
            try{
                const response = await axios.delete(production_url,{headers:{Authorization:localStorage.getItem('token')}})
    
                console.log(email)
                if(response.status !==200)
                {
                    toast.error(response.data.message)
                    showModal
                }
                toast.success("entree supprimee !")
                showModal
              
            }
            catch(error)
            {
                toast.error('erreur: ',error)
            }
            
        }
    
    return(
        <>
            <div 
            onClick={showModal}
            className="fixed inset-0 bg-slate-700/40 ">
          </div>
          <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[150px] flex flex-col">
                <div className="w-full h-9 bg-blue-700">
                    <div className="text-white font-normal relative top-2 left-2">
                        supprimer le compte
                    </div>
                        <button className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm" onClick={showModal}>x</button>
                </div>
                     <div className="relative left-6 top-6">
                         souhaitez vous supprimer cet entree ?
                     </div>
                <div className="flex flex-row gap-[120px] mb-2 relative top-10 left-8 ">
                    <button className=" bg-blue-700 text-white  w-[75px] h-[40px] rounded-lg hover:bg-blue-500" onClick={handleDeletion}>oui</button>
                    <button className=" bg-blue-700 text-white  w-[75px] h-[40px] rounded-lg hover:bg-blue-500" onClick={showModal}>non</button>
                </div>
            </div>
        </>
    )

}

export default  DeleteDialogBox