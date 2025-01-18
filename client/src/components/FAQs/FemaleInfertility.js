import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntries } from '../../adminPages/faq/FemaleInfertility/femaleInfertilitySlice';

const FemaleInfertility = () => {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.femaleFertility);

  useEffect(() => {
    // Fetch the entries from the Redux store when the component mounts
    dispatch(fetchEntries());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-600 py-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-white">
          Female Infertility
        </h1>
        <p className="text-center text-lg text-white mt-2">
          Understanding causes, treatments, and solutions for female infertility.
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

            {/* Display titles of entries in the sidebar */}
            <li>
              <h3 className="text-xl font-semibold text-white mt-4">Entries</h3>
              <ul className="space-y-2 mt-2">
                {entries.map((entry) => (
                  <li key={entry._id}>
                    <a
                      href={`/female-infertility/${entry._id}`}
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
          {/* Entries Section */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Female Infertility FAQ Entries
            </h2>

            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">Error: {error}</p>
            ) : (
              <div>
                {entries.map((entry) => (
                  <div key={entry._id} className="bg-white shadow-lg p-4 mb-4 rounded-lg">
                    <h1 className="text-4xl font-extrabold text-center text-blue-600">{entry.title}</h1>
                    <h4 className="text-lg font-semibold text-blue-700">{entry.subTitle}</h4>
                    <p className="text-gray-600">{entry.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default FemaleInfertility;
