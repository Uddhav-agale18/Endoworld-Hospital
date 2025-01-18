import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntries } from '../../adminPages/faq/Infertility/InfertilitySlice';

const Infertility = () => {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.infertility);

  useEffect(() => {
    dispatch(fetchEntries());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-600 py-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-white">
          Infertility
        </h1>
        <p className="text-center text-lg text-white mt-2">
          Understanding causes, treatments, and solutions for infertility.
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
                MALE INFERTILITY FAQ
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

            {/* Display titles of infertility records in the sidebar */}
            <li>
              <h1 className="text-xl font-semibold text-white mt-4">Infertility Records</h1>
              <ul className="space-y-2 mt-2">
                {entries.map((entry) => (
                  <li key={entry._id}>
                    <a
                      href={`/infertility/${entry._id}`}
                      className="block text-lg text-blue-300 hover:text-blue-100 hover:underline"
                    >
                      {entry.title}
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


            <div className="space-y-6">
              {loading ? (
                <div className="text-center text-xl text-gray-600">Loading...</div>
              ) : error ? (
                <div className="text-center text-xl text-red-500">Error: {error}</div>
              ) : (
                entries.map((entry) => (
                  <div
                    key={entry._id}
                    className="bg-white shadow-xl p-6 mb-6 rounded-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <h1 className="text-4xl font-extrabold text-center text-blue-600">{entry.title}</h1>
                    <h4 className="text-xl font-medium text-blue-700 mb-4">{entry.subTitle}</h4>
                    <p className="text-gray-700 leading-relaxed">{entry.description}</p>
                  </div>
                ))
              )}
            </div>


          </section>
        </main>
      </div>
    </div>
  );
};

export default Infertility;
