//import { useState } from "react";

/*
const loanTypes = [
  { value: "", label: "Select a loan type" },
  { value: "personal", label: "Personal Loan" },
  { value: "mortgage", label: "Mortgage" },
  { value: "car", label: "Car Loan" },
  { value: "business", label: "Business Loan" },
];
*/

const LoanApplicationForm = () => {
  /*
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    loanType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Logic to submit the form data (e.g., sending to API)
  };
  */

  return (
    <>
      {/* Loan Application Section */}
      {/*
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Apply for a Loan</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="loan-type" className="block text-gray-700 font-bold mb-2">
                  Loan Type
                </label>
                <select
                  id="loan-type"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                >
                  {loanTypes.map((loan) => (
                    <option key={loan.value} value={loan.value}>
                      {loan.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="mb-8">
          Demandez un prêt dès aujourd&apos;hui et faites le premier pas vers la réalisation de vos objectifs financiers.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Commencer
          </a>
        </div>
      </section>
    </>
  );
};

export default LoanApplicationForm;
