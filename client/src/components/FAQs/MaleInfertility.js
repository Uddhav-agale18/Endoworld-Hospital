import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMaleFertility } from '../../adminPages/faq/MaleInfertility/maleInFertilitySlice';

const MaleInfertility = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.maleFertility.records);

  useEffect(() => {
    dispatch(fetchAllMaleFertility());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-600 py-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-white">
          Male Infertility
        </h1>
        <p className="text-center text-lg text-white mt-2">
          Understanding causes, treatments, and solutions for male infertility.
        </p>
      </div>

      {/* Sidebar and Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-blue-900 text-white p-6 lg:min-h-screen shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/female-infertility"
                className="block text-lg hover:text-blue-300 hover:underline"
              >
                FEMALE INFERTILITY FAQ
              </a>
            </li>
            <li>
              <a
                href="/male-infertility"
                className="block text-lg hover:text-blue-300 hover:underline"
              >
                MALE INFERTILITY
              </a>
            </li>
            <li>
              <a
                href="/infertility"
                className="block text-lg hover:text-blue-300 hover:underline"
              >
                INFERTILITY
              </a>
            </li>
            <li>
              <a
                href="/hysteroscopy"
                className="block text-lg hover:text-blue-300 hover:underline"
              >
                HYSTEROSCOPY
              </a>
            </li>

            {/* Display titles of male infertility records in the sidebar */}
            <li>
              <h3 className="text-xl font-semibold text-white mt-4">Male Infertility Records</h3>
              <ul className="space-y-2 mt-2">
                {records.map((record) => (
                  <li key={record._id}>
                    <a
                      href={`/male-infertility/${record._id}`}
                      className="block text-lg text-blue-300 hover:text-blue-100 hover:underline"
                    >
                      {record.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Records Section */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Male Infertility Records
            </h2>

            {/* Display records */}
            <div>
              {records.map((record) => (
                <div key={record._id} className="bg-white shadow-lg p-4 mb-4 rounded-lg">
                  <h1 className="text-4xl font-extrabold text-center text-blue-600">{record.title}</h1>
                  <h4 className="text-lg font-semibold text-blue-700">{record.subTitle}</h4>
                  <p className="text-gray-600">{record.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MaleInfertility;
