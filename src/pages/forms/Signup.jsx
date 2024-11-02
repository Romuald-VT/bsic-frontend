import { useState } from "react";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique d'enregistrement ici
    console.log({
      fullName,
      email,
      password,
      confirmPassword,
      termsAccepted,
    });
  };

  return (
    <div>
      <Header/>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Enregistrement Administrateur
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                J&apos;accepte les{" "}
                  <a href="https://www.bsc-bank.com/terms" className="text-blue-500 hover:text-blue-600">
                    Termes et Conditions
                  </a>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Créer un compte
                </button>
              </div>
            </form>
            <p className="text-center mt-4 text-sm">
            Vous avez déjà un compte ?{" "}
              <a href="/login" className="text-blue-500 hover:text-blue-600">
              Identifiez-vous
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default SignUpForm;
