import React from "react";
import { FaStethoscope, FaProcedures, FaHeart, FaHospital } from "react-icons/fa";

const MedicineAndICU = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Medicine and ICU
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Comprehensive care for critical and emergency medical needs.
        </p>
      </div>

      {/* About Medicine and ICU */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Medicine and ICU</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our Medicine and ICU departments are equipped to handle emergencies and provide advanced care for critically ill patients. With a team of highly trained medical professionals, state-of-the-art technology, and a patient-centered approach, we ensure the best outcomes for our patients.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether it’s managing acute medical conditions or providing intensive monitoring and treatment, our ICU is designed to cater to the most challenging medical scenarios.
        </p>
      </div>

      {/* Features of Medicine and ICU */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Features of Our ICU</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaStethoscope className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Medical Team</h3>
                <p className="text-gray-600 mt-2">
                  Our ICU is staffed by experienced doctors, nurses, and specialists available 24/7.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaProcedures className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Advanced Equipment</h3>
                <p className="text-gray-600 mt-2">
                  Equipped with cutting-edge ventilators, monitors, and diagnostic tools.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHeart className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Comprehensive Care</h3>
                <p className="text-gray-600 mt-2">
                  Personalized treatment plans for every patient with a holistic approach to healing.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHospital className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Emergency Services</h3>
                <p className="text-gray-600 mt-2">
                  Rapid response teams for handling critical emergencies efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions We Treat */}
      <div className="py-8 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Respiratory failure requiring ventilatory support.</li>
            <li>Severe infections such as sepsis and pneumonia.</li>
            <li>Cardiovascular emergencies like heart attacks.</li>
            <li>Post-operative monitoring and care.</li>
            <li>Neurological emergencies such as strokes.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Patient-Centric Approach</h3>
              <p className="text-gray-600 mt-2">
                We prioritize patient comfort and involve families in the care process.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600 mt-2">
                Around-the-clock care with continuous monitoring and immediate intervention.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Multidisciplinary Team</h3>
              <p className="text-gray-600 mt-2">
                Collaborations between various specialties for comprehensive treatment.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Focus on Innovation</h3>
              <p className="text-gray-600 mt-2">
                Continuous advancements in technology and practices to deliver the best care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get the Best Care in Critical Times
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to learn more about our Medicine and ICU services.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineAndICU;
