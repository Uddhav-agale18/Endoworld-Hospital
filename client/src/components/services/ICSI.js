import React from "react";
import { FaMicroscope, FaHandHoldingMedical, FaHeartbeat, FaUserMd } from "react-icons/fa";

const ICSI = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Intracytoplasmic Sperm Injection (ICSI)
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Advanced fertility treatment for overcoming severe male infertility challenges.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is ICSI?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Intracytoplasmic Sperm Injection (ICSI) is a highly specialized fertility treatment used in cases where conventional IVF techniques are insufficient. During ICSI, a single healthy sperm is injected directly into an egg to facilitate fertilization, increasing the chances of conception.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of ICSI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaMicroscope className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Precise Fertilization</h3>
                <p className="text-gray-600 mt-2">
                  ICSI ensures fertilization by directly injecting a sperm into the egg, overcoming severe male infertility issues.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHandHoldingMedical className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Higher Success Rates</h3>
                <p className="text-gray-600 mt-2">
                  Provides better chances of conception in cases where traditional IVF methods have failed.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHeartbeat className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Safe and Effective</h3>
                <p className="text-gray-600 mt-2">
                  ICSI is a safe procedure performed under expert medical supervision with minimal risks.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaUserMd className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Care</h3>
                <p className="text-gray-600 mt-2">
                  Performed by experienced fertility specialists using advanced medical equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Procedure Section */}
      <div className="py-8 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How Does ICSI Work?</h2>
          <ol className="list-decimal list-inside text-gray-600 leading-relaxed">
            <li>Egg retrieval from the female partner after ovarian stimulation.</li>
            <li>Sperm collection from the male partner or donor.</li>
            <li>Single sperm selection and direct injection into the egg.</li>
            <li>Monitoring for fertilization and embryo development.</li>
            <li>Embryo transfer to the uterus for implantation.</li>
          </ol>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Facility?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">State-of-the-Art Labs</h3>
              <p className="text-gray-600 mt-2">
                Equipped with the latest technology to ensure precise and successful procedures.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Personalized Care</h3>
              <p className="text-gray-600 mt-2">
                Tailored fertility plans to meet the unique needs of each couple.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Experienced Specialists</h3>
              <p className="text-gray-600 mt-2">
                A team of highly trained doctors with years of experience in fertility treatments.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Comprehensive Support</h3>
              <p className="text-gray-600 mt-2">
                From consultation to aftercare, we support you at every step of the journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey to Parenthood?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our fertility specialists today to schedule a consultation or learn more about ICSI.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ICSI;
