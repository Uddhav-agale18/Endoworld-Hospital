import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorStaff } from '../../adminPages/doctorStaff/doctorStaffSlice';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Material-UI Clock Icon

const ConsultingTime = () => {
  const dispatch = useDispatch();
  const doctorStaff = useSelector((state) => state.doctorStaff.items);

  // Static times for the first three doctors
  const consultationTimes = [
    "Morning 7 AM to 9 PM",
    "Morning 10 AM to 4 PM",
    "Morning 9 AM to 4 PM",
  ];

  useEffect(() => {
    dispatch(fetchDoctorStaff());
  }, [dispatch]);

  return (
    <div>
      <section className=" bg-gray-50">
        <h2 className="text-4xl font-extrabold text-center text-white bg-blue-600 py-10 w-full">
          Doctors Consultation Timings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4">
          {doctorStaff.slice(0, 3).map((doctor, index) => (
            <div
              key={doctor._id}
              className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              <img
                src={`http://localhost:5000${doctor.image}`}
                alt={doctor.name}
                className="w-36 h-36 rounded-full mb-4 object-cover"
              />
              <p className="text-xl font-semibold text-gray-800 text-center">{doctor.name}</p>
              <p className="text-sm text-gray-600 text-center">{doctor.education}</p>
              <div className="flex items-center mt-2">
                <AccessTimeIcon className="text-blue-600 mr-2" /> {/* Clock Icon */}
                <p className="text-sm text-gray-600">{consultationTimes[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ConsultingTime;
