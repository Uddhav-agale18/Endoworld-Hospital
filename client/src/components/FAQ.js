import React, { useState } from 'react'

const FAQ = () => {
  // Sample FAQ data
  const faqData = [
    {
      id: 1,
      question: "What services does the hospital provide?",
      answer: "Our hospital provides a wide range of medical services including emergency care, cardiology, orthopedics, pediatrics, and more.",
    },
    {
      id: 2,
      question: "How can I make an appointment with a doctor?",
      answer: "You can make an appointment by visiting our website or calling our appointment desk at (123) 456-7890.",
    },
    {
      id: 3,
      question: "What are the visiting hours for patients?",
      answer: "Visiting hours are from 9:00 AM to 8:00 PM daily. However, specific hours may vary depending on the department.",
    },
    {
      id: 4,
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance providers. Please contact our billing department for more details on accepted insurance plans.",
    },
    {
      id: 5,
      question: "How can I access my medical records?",
      answer: "You can request your medical records by filling out a request form at the hospital's records department or through our online portal.",
    },
  ];

  // State to manage which FAQ answer is expanded
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle function to open/close an FAQ answer
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-white shadow-lg rounded-lg p-6">
              <div
                className="cursor-pointer text-xl font-semibold text-gray-800"
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
              </div>
              {openFAQ === faq.id && (
                <div className="mt-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
