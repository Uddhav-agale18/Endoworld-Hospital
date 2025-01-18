import React from 'react';

const ManagementTeam = () => {
  return (
    <div className="bg-gray-100">
      {/* Full-width title */}
      <h2 className="text-4xl font-extrabold text-center text-white bg-blue-600 py-10 w-full">
        MANAGEMENT TEAM
      </h2>
      
      {/* Description section with narrower width */}
      <div className="max-w-3xl mx-auto p-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our experienced executive team is responsible for ensuring the hospital runs safely, 
          that our world-class consultants and nursing staff treat patients with the highest standards 
          of care, and that our facilities are up-to-date and well-maintained.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Continual improvement and development are high on the team’s agenda, along with ensuring 
          that every member of staff strives for the very best patient outcomes. This commitment makes 
          us the best hospital in Aurangabad.
        </p>
      </div>
    </div>
  );
};

export default ManagementTeam;
