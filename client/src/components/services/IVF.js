import React from "react";
import { FaHeartbeat, FaMicroscope, FaHandHoldingMedical, FaBaby } from "react-icons/fa";

const IVF = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          In Vitro Fertilization (IVF)
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Transforming dreams of parenthood into reality with cutting-edge fertility treatments.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is IVF?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In Vitro Fertilization (IVF) is a revolutionary fertility treatment where eggs are retrieved and fertilized with sperm in a laboratory. The resulting embryo is then transferred to the uterus to achieve pregnancy. IVF is a beacon of hope for couples facing infertility challenges.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of IVF</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHeartbeat className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">High Success Rates</h3>
                <p className="text-gray-600 mt-2">
                  IVF offers one of the highest success rates among fertility treatments.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaMicroscope className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Advanced Technology</h3>
                <p className="text-gray-600 mt-2">
                  Leverages cutting-edge techniques and equipment for precise fertilization.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHandHoldingMedical className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Comprehensive Care</h3>
                <p className="text-gray-600 mt-2">
                  Personalized treatment plans tailored to individual needs.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaBaby className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Path to Parenthood</h3>
                <p className="text-gray-600 mt-2">
                  IVF provides hope for couples struggling with infertility, making parenthood possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Procedure Section */}
      <div className="py-8 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How Does IVF Work?</h2>
          <ol className="list-decimal list-inside text-gray-600 leading-relaxed">
            <li>Ovarian stimulation to produce multiple eggs.</li>
            <li>Egg retrieval under ultrasound guidance.</li>
            <li>Fertilization of eggs with sperm in the lab.</li>
            <li>Monitoring embryo development.</li>
            <li>Embryo transfer to the uterus for implantation.</li>
          </ol>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our IVF Center?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Expert Specialists</h3>
              <p className="text-gray-600 mt-2">
                Our team consists of highly experienced fertility experts.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">State-of-the-Art Facilities</h3>
              <p className="text-gray-600 mt-2">
                Equipped with modern labs and technology for optimal results.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Personalized Treatment</h3>
              <p className="text-gray-600 mt-2">
                Customized plans to meet the unique needs of every couple.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Comprehensive Support</h3>
              <p className="text-gray-600 mt-2">
                Emotional and medical support throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Start Your IVF Journey Today
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out to our specialists for a consultation and take the first step toward parenthood.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default IVF;
