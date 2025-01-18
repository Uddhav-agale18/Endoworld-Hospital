import React from "react";
import { FaSyringe, FaMicroscope, FaHeartbeat, FaHospitalAlt } from "react-icons/fa";

const Laparoscopy = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Laparoscopy
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Minimally invasive procedures for diagnosis and treatment.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Laparoscopy?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Laparoscopy is a minimally invasive surgical procedure that allows doctors to diagnose and treat conditions within the abdomen and pelvis using small incisions. It offers quicker recovery, reduced pain, and better outcomes for patients.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Using a specialized instrument called a laparoscope, surgeons can view internal organs in real-time without the need for large incisions, making it a preferred option for many procedures.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Laparoscopy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaSyringe className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Minimally Invasive</h3>
                <p className="text-gray-600 mt-2">
                  Small incisions result in less scarring and quicker recovery times.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaMicroscope className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Precision Diagnosis</h3>
                <p className="text-gray-600 mt-2">
                  Enhanced visualization of internal organs for accurate diagnosis.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHeartbeat className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Reduced Pain</h3>
                <p className="text-gray-600 mt-2">
                  Patients experience significantly less postoperative pain.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHospitalAlt className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Faster Recovery</h3>
                <p className="text-gray-600 mt-2">
                  Shorter hospital stays and quicker return to daily activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Applications Section */}
      <div className="py-8 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Common Applications</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Diagnosis and treatment of abdominal pain.</li>
            <li>Removal of ovarian cysts or uterine fibroids.</li>
            <li>Treatment of endometriosis and ectopic pregnancies.</li>
            <li>Hernia repairs and gallbladder removal.</li>
            <li>Evaluation of infertility or unexplained abdominal conditions.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us for Laparoscopy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">State-of-the-Art Technology</h3>
              <p className="text-gray-600 mt-2">
                Equipped with advanced laparoscopic tools for precise procedures.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Experienced Surgeons</h3>
              <p className="text-gray-600 mt-2">
                Our team includes specialists with extensive expertise in laparoscopy.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Comprehensive Care</h3>
              <p className="text-gray-600 mt-2">
                From pre-surgery counseling to postoperative support, we prioritize patient care.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Personalized Approach</h3>
              <p className="text-gray-600 mt-2">
                Tailored treatment plans to meet the unique needs of each patient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Experience the Benefits of Modern Laparoscopy
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule a consultation today and take the first step towards a healthier you.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Laparoscopy;
