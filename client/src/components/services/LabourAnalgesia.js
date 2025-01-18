import React from "react";
import { FaHeartbeat, FaStethoscope, FaChild, FaHandHoldingHeart } from "react-icons/fa";

const LabourAnalgesia = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-pink-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Labour Analgesia
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Ensuring a smooth and pain-free birthing experience for every mother.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Labour Analgesia?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Labour analgesia refers to medical techniques and interventions used to minimize or eliminate pain during childbirth. Our expert team provides effective and safe options tailored to each mother’s preferences and medical needs.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Labour Analgesia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHeartbeat className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Reduced Pain</h3>
                <p className="text-gray-600 mt-2">
                  Provides significant relief from labour pain, ensuring comfort.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaStethoscope className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Safe Procedures</h3>
                <p className="text-gray-600 mt-2">
                  Administered by trained professionals using safe and effective techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaChild className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Enhanced Experience</h3>
                <p className="text-gray-600 mt-2">
                  Allows mothers to focus on the joy of childbirth without the stress of pain.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow">
              <FaHandHoldingHeart className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Emotional Support</h3>
                <p className="text-gray-600 mt-2">
                  Ensures peace of mind and emotional well-being for the mother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Techniques Section */}
      <div className="py-8 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Techniques of Labour Analgesia</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>
              <strong>Epidural Analgesia:</strong> The most common and effective method, providing continuous pain relief.
            </li>
            <li>
              <strong>Spinal Analgesia:</strong> A single injection to provide quick and complete pain relief.
            </li>
            <li>
              <strong>Inhalation Analgesia:</strong> Gas-based options like nitrous oxide for mild pain relief.
            </li>
            <li>
              <strong>Medications:</strong> Intravenous or intramuscular medications to manage pain during labour.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us for Labour Analgesia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
              <p className="text-gray-600 mt-2">
                Highly skilled anesthetists and obstetricians with years of experience.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Modern Facilities</h3>
              <p className="text-gray-600 mt-2">
                State-of-the-art labour rooms and advanced equipment for safe care.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600 mt-2">
                Our team is available round the clock to support you throughout labour.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Patient-Centered Approach</h3>
              <p className="text-gray-600 mt-2">
                We prioritize your comfort and preferences at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-pink-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Discover a Pain-Free Childbirth Experience
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us to learn more about labour analgesia and how we can support your journey to motherhood.
          </p>
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabourAnalgesia;
