import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorStaff } from '../../adminPages/doctorStaff/doctorStaffSlice';

const OurDoctors = () => {
  const dispatch = useDispatch();
  const doctorStaff = useSelector((state) => state.doctorStaff.items);

  useEffect(() => {
    dispatch(fetchDoctorStaff());
  }, [dispatch]);

  return (
    <div>
      <section className="py-8 bg-gray-50">

        <h2 className="text-4xl font-extrabold text-center mb-10 text-white bg-blue-600 py-10">
          Our Professional Doctors
        </h2>

        <div className="space-y-6 px-4 sm:px-6 lg:px-16">
          {doctorStaff.map((doctor, index) => (
            <React.Fragment key={doctor._id}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-white rounded-lg shadow-md min-h-[240px] justify-center sm:justify-between">
                {/* Doctor Information */}
                <div className="flex-1 sm:w-3/5 text-center sm:text-left sm:pr-6 mb-4 sm:mb-0 max-w-full">
                  <p className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
                    {doctor.name}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 mb-1">{doctor.education}</p>
                  <p className="text-sm text-gray-600">{doctor.description}</p>
                </div>
                {/* Doctor Image with Shadow */}
                <div className="flex-shrink-0">
                  <img
                    src={`http://localhost:5000${doctor.image}`}
                    alt={doctor.name}
                    className="w-40 h-56 sm:w-56 sm:h-72 object-cover border-2 border-gray-300 rounded-md shadow-lg"
                  />
                </div>
              </div>
              {/* Divider */}
              {index < doctorStaff.length - 1 && <hr className="border-t border-gray-300 my-4 sm:my-6" />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurDoctors;
