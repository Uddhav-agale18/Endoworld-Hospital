import React from "react";
import { FaBabyCarriage, FaHeartbeat, FaHospital } from "react-icons/fa";

const NICU = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-pink-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Neonatal Intensive Care Unit (NICU)
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Providing specialized care for critically ill or premature newborns.
        </p>
      </div>

      {/* About NICU */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About NICU</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our Neonatal Intensive Care Unit (NICU) is equipped with the most advanced technology and staffed by highly trained medical professionals. We provide around-the-clock care for premature, critically ill, or newborns in need of intensive medical support.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The NICU is designed to provide the highest level of medical care for newborns requiring intensive care and treatment. Our skilled team of neonatologists, nurses, and specialists ensure that each baby receives the best possible care in a compassionate and nurturing environment.
        </p>
      </div>

      {/* Features of NICU */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Features of Our NICU</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-pink-100 p-6 rounded-lg shadow">
              <FaBabyCarriage className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Premature Baby Care</h3>
                <p className="text-gray-600 mt-2">
                  Specialized care for premature infants, helping them grow and thrive in a controlled, nurturing environment.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-pink-100 p-6 rounded-lg shadow">
              <FaHeartbeat className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Advanced Monitoring</h3>
                <p className="text-gray-600 mt-2">
                  Continuous monitoring of vital signs, including heart rate, oxygen levels, and breathing, to ensure optimal care.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-pink-100 p-6 rounded-lg shadow">
              <FaHospital className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">24/7 Specialist Care</h3>
                <p className="text-gray-600 mt-2">
                  Our NICU team is available 24/7, with neonatal specialists and pediatricians providing expert care at all times.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-pink-100 p-6 rounded-lg shadow">
              <FaHeartbeat className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Family-Centered Care</h3>
                <p className="text-gray-600 mt-2">
                  We emphasize family involvement in the care process, keeping parents informed and ensuring they are part of the healing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions We Treat */}
      <div className="py-8 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Premature birth and low birth weight.</li>
            <li>Respiratory distress syndrome and oxygen therapy.</li>
            <li>Congenital heart defects and surgeries.</li>
            <li>Neonatal infections and sepsis.</li>
            <li>Brain bleeds and neurological conditions.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our NICU?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Expert Neonatal Care</h3>
              <p className="text-gray-600 mt-2">
                Our neonatal care specialists ensure that each baby receives the highest standard of care tailored to their needs.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Advanced Equipment</h3>
              <p className="text-gray-600 mt-2">
                Equipped with the latest in neonatal technology for precise monitoring and treatment of babies in critical condition.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Family Involvement</h3>
              <p className="text-gray-600 mt-2">
                We provide a family-centered approach, allowing parents to be involved in their baby's care and decision-making.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Round-the-Clock Monitoring</h3>
              <p className="text-gray-600 mt-2">
                Continuous care and monitoring are provided to ensure that babies are safe and responding well to treatment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-pink-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Baby’s Health Is Our Priority
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out today to learn more about our NICU services and how we can help your newborn thrive.
          </p>
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NICU;
