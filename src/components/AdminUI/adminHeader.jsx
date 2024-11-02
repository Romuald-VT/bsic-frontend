import { useState } from 'react'
import logo from '../../assets/logo.png'

const AdminHeader = ()=>{
    
    const [showAbout,setShowAbout ] = useState(false)

    return(
    <div className=''>
        <div className=''>
            <div>
            <img src={logo} alt='bsic-bank-logo' className=''/>
            </div>
            <div className=''>
                 bsic-bank -admin
            </div>
            
        </div>
        <div className=''>
            <div className='' onClick={()=>{setShowAbout(!showAbout)}}>
                A propos
                {showAbout && <div>
                               res.user
                               </div>}
            </div>
            <div>
                deconnexion
            </div>
        </div>
    </div>)
}

export default  AdminHeader