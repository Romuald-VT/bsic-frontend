/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';   

/**
 * MembershipForm - Un formulaire d'adhésion interactif pour les nouveaux membres
 * 
 * @returns {JSX.Element} - Retourne un composant de formulaire
 */
const MembershipForm = () => {
  // State pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password:'',
    activite_professionnelle: '',
  });

  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataToSend = new FormData()

    
  
    dataToSend.append('firstname',formData.nom)
    dataToSend.append('lastname',formData.prenom)
    dataToSend.append('email',formData.email)
    dataToSend.append('password',formData.password)
    dataToSend.append('job',formData.activite_professionnelle)
     try
     {
       const prod_url = "https://bsic-api-production-6fde.up.railway.app/api/customers/accounts/add" 
       const response = await axios.post(prod_url,dataToSend,{headers:{'Content-Type':'application/json'}})
       if(response.status === 201)
       {
        toast.success('operation reussie !', response.config)
        
       }
       
       if(response.status ===500)
       {
         toast.error(response.data.error)
       }
     }
     catch(err)
     {
       toast.error(err)
     }
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      password:'',
      activite_professionnelle: '',
    })
  };

  return (
    <div>
      <Header/>
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md my-[150px] ">
      <h1 className="text-2xl font-bold text-center mb-6">Devenir membre</h1>
      <form id="membershipForm" className="space-y-4" onSubmit={handleSubmit}>
        {/* Champ Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        {/* Champ Prénom */}
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        {/*Champ Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        {/* Activité professionnelle */}
        <div>
          <label htmlFor="activite_professionnelle" className="block text-sm font-medium text-gray-700">
            Activité professionnelle
          </label>
          <select
            id="activite_professionnelle"
            name="activite_professionnelle"
            value={formData.activite_professionnelle}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Sélectionnez votre activité</option>
            <option value="salarie">Salarié</option>
            <option value="independant">Indépendant</option>
            <option value="etudiant">Étudiant</option>
            <option value="retraite">Retraité</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Soumettre
        </button>
      </form>
      <ToastContainer/>
    </div>
    <Footer/>
    </div>
  );
};

export default MembershipForm;
