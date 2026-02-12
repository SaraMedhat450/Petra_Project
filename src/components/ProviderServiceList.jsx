import { useEffect, useState } from "react";
import { serviceService } from "../services";
import "flowbite";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

export default function ProviderServiceList() {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);
  const [services, setServices] = useState([]);
  const [providerInfo, setProviderInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    initFlowbite();

    const handleClickOutside = () => setOpenDropdownId(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchProviderData = async () => {
      try {
        const data = await serviceService.getProviderData();
        console.log("Provider Data:", data);

        setServices(data.services || []);
        setProviderInfo(data.provider || null);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load your services");
        setLoading(false);
      }
    };

    fetchProviderData();
  }, []);



  const deleteService = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
    setModalOpen(null);
  };

  return (
    <div className="m-5">
      <div className="pb-5 flex justify-between">
        <div className="text-xl font-bold text-sky-900">
          Services List
        </div>

        <Link
          to="/provider/addService"
          className="text-white bg-sky-900 hover:bg-sky-900/80 focus:ring-4 focus:ring-brand-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors"
        >
          + New Service
        </Link>
      </div>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default w-full font-medium text-medium">

        {/* Loading */}
        {loading && (
          <div className="text-center py-10 text-gray-600">
            Loading services...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-10 text-red-600">
            {error}
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <table className="w-full text-medium text-center text-body font-medium">
            <thead className="text-white bg-brand-dark">
              <tr>
                <th className="px-2 py-3">Service</th>
                <th className="px-2 py-3">Category</th>
                <th className="px-2 py-3">Pricing</th>
                <th className="px-2 py-3">Price Type</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {services.map((service) => (
                <tr
                  key={service.id}
                  className="bg-white border-b hover:bg-gray-50 transition-colors"
                >
                  {/* Service Title */}
                  <td className="px-2 py-3">
                    {service.service_title_id}
                  </td>

                  {/* Category */}
                  <td className="px-2 py-3">
                    {service.categoryId}
                  </td>

                  {/* Pricing */}
                  <td className="px-2 py-3">
                    {service.price_Type === "Hourly" &&
                      `${service.price} L.E / Hour`}
                    {service.price_Type === "Fixed" &&
                      `${service.price} L.E`}
                    {service.price_Type === "Free" && "Free"}
                  </td>

                  {/* Price Type */}
                  <td className="px-2 py-3">
                    {service.price_Type}
                  </td>

                  {/* Action */}
                  <td className="px-2 py-3 relative">
                    <div className="flex justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownId(
                            openDropdownId === service.id
                              ? null
                              : service.id
                          );
                        }}
                        className="text-gray-600 hover:text-sky-900 p-2"
                      >
                        <i className="fa-solid fa-gear text-lg"></i>
                      </button>
                    </div>

                    {/* Dropdown */}
                    {openDropdownId === service.id && (
                      <div className="absolute right-1/2 translate-x-1/2 mt-2 z-50 bg-white rounded-md shadow-lg w-32 border border-gray-200">
                        <ul className="text-sm text-gray-700">
                          <li>
                            <Link
                              to={`/provider/editService/${service.id}`}
                              className="flex items-center px-4 py-3 hover:bg-[#2d7a4d] hover:text-white transition-colors border-b border-gray-100"
                            >
                              <i className="fa-regular fa-pen-to-square mr-2"></i>
                              Edit
                            </Link>
                          </li>

                          <li>
                            <button
                              onClick={() => {
                                setModalOpen(service.id);
                                setOpenDropdownId(null);
                              }}
                              className="flex items-center w-full px-4 py-3 hover:bg-red-600 hover:text-white transition-colors"
                            >
                              <i className="fa-solid fa-trash-can mr-2"></i>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* Modal */}
                    {modalOpen === service.id && (
                      <div className="fixed inset-0 flex items-center justify-center z-[60]">
                        <div
                          className="fixed inset-0 bg-black/50"
                          onClick={() => setModalOpen(null)}
                        ></div>

                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative z-[70]">
                          <h3 className="mb-4 text-gray-800 font-semibold text-center">
                            Are you sure you want to delete this service?
                          </h3>

                          <div className="flex justify-center gap-4">
                            <button
                              onClick={() => deleteService(service.id)}
                              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                            >
                              Delete
                            </button>

                            <button
                              onClick={() => setModalOpen(null)}
                              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
