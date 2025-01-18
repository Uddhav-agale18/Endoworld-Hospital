import React from "react";

const CasualtyAndOrthopaedic = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-100 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Casualty and Orthopaedic Services
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Comprehensive emergency care and advanced orthopaedic treatments under one roof.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Casualty and Orthopaedic Department is dedicated to providing immediate medical attention to trauma cases and specialized care for musculoskeletal issues. Our team of skilled professionals ensures prompt and effective treatment to improve patient outcomes.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Emergency Care */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Emergency Care</h3>
              <p className="text-gray-600 mt-2">
                Our 24/7 casualty unit is equipped to handle emergencies, including fractures, dislocations, and major trauma cases.
              </p>
            </div>
            {/* Orthopaedic Treatments */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Orthopaedic Treatments</h3>
              <p className="text-gray-600 mt-2">
                Advanced care for bone and joint disorders, including arthritis management, joint replacements, and spinal surgeries.
              </p>
            </div>
            {/* Rehabilitation Services */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Rehabilitation Services</h3>
              <p className="text-gray-600 mt-2">
                Comprehensive rehabilitation programs for post-surgical recovery, physiotherapy, and pain management.
              </p>
            </div>
            {/* Diagnostic Facilities */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Diagnostic Facilities</h3>
              <p className="text-gray-600 mt-2">
                State-of-the-art imaging technologies, including X-rays, MRIs, and CT scans, to aid in accurate diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Procedures Section */}
      <div className="py-8 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Specialized Procedures</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Trauma surgery for complex fractures and injuries</li>
            <li>Joint replacement surgeries, including hip and knee replacements</li>
            <li>Arthroscopic procedures for minimally invasive joint treatments</li>
            <li>Spinal surgeries for disc problems and deformities</li>
          </ul>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Facilities Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Modern Operating Rooms</h3>
              <p className="text-gray-600 mt-2">
                Equipped with cutting-edge technology to perform complex surgical procedures.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">24/7 Emergency Unit</h3>
              <p className="text-gray-600 mt-2">
                Round-the-clock services to address medical emergencies without delay.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Imaging and Diagnostics</h3>
              <p className="text-gray-600 mt-2">
                Advanced imaging facilities for precise diagnosis of orthopaedic conditions.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Physiotherapy Unit</h3>
              <p className="text-gray-600 mt-2">
                Well-equipped unit for rehabilitation and recovery under expert supervision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Need Immediate Care or Expert Consultation?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our team today to schedule an appointment or get emergency assistance.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasualtyAndOrthopaedic;
