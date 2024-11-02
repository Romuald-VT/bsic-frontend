import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan online through our website or visit one of our branches. You'll need to provide some personal information and documentation to support your application."
  },
  // Vous pouvez ajouter d'autres FAQ ici sous forme d'objets.
];

const FAQSection = () => {
  const [selected, setSelected] = useState(null); // Pour suivre la question actuellement ouverte

  const toggleFAQ = (id) => {
    setSelected(selected !== id ? id : null); // Si déjà sélectionné, on la ferme, sinon on l'ouvre
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquemment posées</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex justify-between items-center w-full p-4 bg-gray-200 hover:bg-gray-300 transition duration-300"
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 ${selected === faq.id ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {selected === faq.id && (
                <div className="p-4 bg-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
