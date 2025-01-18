import React from 'react';

const TermsCondition = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-xl text-gray-600">For Using Endoworld Hospital IVF Center Services</p>
      </div>

      {/* Introduction Section */}
      <div className="mb-8">
        <p className="text-lg text-justify leading-relaxed">
          Welcome to Endoworld Hospital IVF Center in Aurangabad. These Terms and Conditions ("Terms") govern your
          access to and use of our services, including consultations, treatments, and use of our website.
          By accessing or using our services, you agree to be bound by these Terms. If you do not agree with
          these Terms, please refrain from using our services.
        </p>
      </div>

      {/* General Terms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">General Terms</h2>
        <ul className="list-decimal list-inside text-lg space-y-2 text-gray-700">
          <li>All users must provide accurate and complete information during consultations and treatment processes.</li>
          <li>We reserve the right to update these Terms at any time. It is your responsibility to stay informed of any changes.</li>
          <li>You must comply with all applicable laws and regulations when using our services.</li>
          <li>Any advice or treatment recommendations are based on the information provided by you and should be followed accordingly.</li>
        </ul>
      </div>

      {/* Services Terms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Services Terms</h2>
        <p className="text-lg text-justify leading-relaxed mb-4">
          By availing services from Endoworld Hospital IVF Center, you agree to the following:
        </p>
        <ul className="list-decimal list-inside text-lg space-y-2 text-gray-700">
          <li>All consultations, procedures, and treatments will be performed by qualified medical professionals.</li>
          <li>Outcomes of treatments, including IVF procedures, may vary, and no guarantees are provided regarding success rates.</li>
          <li>Patients must adhere to the pre-procedure and post-procedure guidelines provided by the hospital.</li>
          <li>Payments for treatments and services must be completed as per the hospital's billing policies.</li>
        </ul>
      </div>

      {/* Code of Conduct Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Code of Conduct</h2>
        <p className="text-lg text-justify leading-relaxed mb-4">
          Patients and visitors are expected to follow the hospital's code of conduct to ensure a safe and respectful environment:
        </p>
        <ul className="list-decimal list-inside text-lg space-y-2 text-gray-700">
          <li>Maintain decorum and respect the privacy of other patients and staff members.</li>
          <li>Follow the rules and regulations established by the hospital management.</li>
          <li>Refrain from any disruptive or harmful behavior while on hospital premises.</li>
          <li>Visitors should adhere to visiting hours and avoid causing disturbances.</li>
        </ul>
      </div>

      {/* Liability Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Limitation of Liability</h2>
        <p className="text-lg text-justify leading-relaxed mb-4">
          Endoworld Hospital IVF Center will not be liable for any injuries, damages, or losses resulting from the use
          of our services, except where required by law. Patients are encouraged to discuss any concerns with their
          treating physician.
        </p>
      </div>

      {/* Privacy and Data Protection Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Privacy and Data Protection</h2>
        <p className="text-lg text-justify leading-relaxed mb-4">
          We respect your privacy. Any personal or medical information collected will be handled in accordance with our privacy policy.
          By using our services, you consent to the collection, storage, and use of your information as required for
          medical purposes.
        </p>
      </div>

      {/* Governing Law Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Governing Law</h2>
        <p className="text-lg text-justify leading-relaxed mb-4">
          These Terms and Conditions are governed by the laws of India. Any disputes arising from these Terms shall be
          resolved under the exclusive jurisdiction of the courts in Aurangabad, Maharashtra, India.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Contact Us</h2>
        <p className="text-lg text-justify leading-relaxed mb-4">
          If you have any questions or require further information about our services, please contact us:
        </p>
        <p className="text-lg">Phone: (+91) 9876543210</p>
        <p className="text-lg">Email: info@endoworldhospital.com</p>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600">Thank you for choosing Endoworld Hospital IVF Center!</p>
      </div>
    </div>
  );
};

export default TermsCondition;
