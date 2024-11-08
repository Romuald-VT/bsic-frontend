/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const EmailModal = ({data,showModal})=>{

    const [formData, setFormData] = useState({
        to: '',
        subject: '',
        message: ''
      });
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value
            });
        };

        const handleReset = ()=>{
            setFormData({
                to:"",
                subject:"",
                message:""
            })
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Logique pour envoyer l'email ou appeler une API pour l'envoi de l'email
            console.log('Email envoyé :', formData);
            // Réinitialiser le formulaire après l'envoi
            setFormData({ to: '', subject: '', message: '' });
        };

    return(
        <>
          <div 
            onClick={showModal}
            className="fixed inset-0 bg-slate-700/40 ">
          </div>
          <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[280px] flex flex-col">
                <div className="w-full h-9 bg-blue-700">
                    <div className="text-white font-normal relative top-2 left-2">
                        notifier le client
                    </div>
                        <button className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm" onClick={showModal}>x</button>
                </div>
                <form onSubmit={handleSubmit} className="relative top-5 left-3 w-[320px] flex flex-col">
                    <div>
                        <input
                        type="email"
                        id="to"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="A"
                        required
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Sujet"
                        className="w-full h-8 mb-2"
                        />
                    </div>
                    <div>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Message"
                        className="w-full mb-2 h-20"
                        />
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

export default EmailModal