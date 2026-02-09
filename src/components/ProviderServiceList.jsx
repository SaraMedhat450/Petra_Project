import { useEffect, useState } from "react";
import 'flowbite';
import { initFlowbite } from "flowbite";

export default function ProviderServiceList() {

  useEffect(() => {
    initFlowbite();
  }, []);

  const [services, setServices] = useState([
    { id: 1, name: "Service 1", category: "Category 1", pricing: "10 Le / Hour", active: false },
    { id: 2, name: "Service 2", category: "Category 2", pricing: "100 L.e", active: false },
    { id: 3, name: "Service 3", category: "Category 3", pricing: "10 Le / Hour", active: false },
    { id: 4, name: "Service 4", category: "Category 4", pricing: "Accessories", active: false },
  ]);

  const [modalOpen, setModalOpen] = useState(null);

  const toggleService = (id) => {
    setServices(prev =>
      prev.map(service =>
        service.id === id ? { ...service, active: !service.active } : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(prev => prev.filter(service => service.id !== id));
    setModalOpen(null);
  };

  return (
    <div className="mx-8 mt-8 ">

      <div className="p-5 flex justify-between">
        <div className="text-xl font-bold">Services List</div>

        <button type="button" className="text-white bg-brand-primary hover:bg-brand-primary/90 focus:ring-4 focus:ring-brand-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors">
          + New Service
        </button>

      </div>


      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default w-full font-medium text-medium">


        <div className="px-5 py-8 flex justify-between">


          <div className="flex gap-5">

            <div>
            <button id="dropdown2" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center rounded-lg text-black bg-white box-border border border-black hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2 focus:outline-none" type="button">
              All
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
            </button>

            <div id="dropdown" className="z-10 hidden bg-white border border-default-medium rounded-lg shadow-lg w-44">
              <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdown2">
                <li>
                  <a to="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                </li>
                <li>
                  <a to="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
                </li>
                <li>
                  <a to="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
                </li>
                <li>
                  <a to="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                </li>
              </ul>
            </div>
          </div>

          <form className="max-w-md mx-auto ">
            <label for="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div className="relative rounded-xl">
              <div className="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none rounded-xl">
                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
              </div>
              <input type="search" id="search" className="block w-full p-2 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
              <button type="button" className="absolute end-1.5 top-1.5 bottom-1.5 text-white bg-brand-primary hover:bg-brand-primary/90 focus:ring-4 focus:ring-brand-primary/50 font-medium rounded-lg text-xs px-3 focus:outline-none transition-colors">Search</button>
            </div>
          </form>

          </div>


        </div>



        <table className="w-full text-medium text-center rtl:text-right text-body font-medium ">
          <thead className="font-medium text-bold text-white bg-brand-dark border-b border-brand-primary/20">
            <tr>
              <th className="px-2 py-3 font-medium">Service</th>
              <th className="px-2 py-3 font-medium">Category</th>
              <th className="px-2 py-3 font-medium">Pricing</th>
              <th className="px-2 py-3 font-medium">Status</th>
              <th className="px-2 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="bg-white border-b hover:bg-gray-50 transition-colors text-medium font-medium">
                <td className="px-2 py-3">{service.name}</td>
                <td className="px-2 py-3">{service.category}</td>
                <td className="px-2 py-3">{service.pricing}</td>
                <td className="px-2 py-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={service.active}
                      onChange={() => toggleService(service.id)}
                    />
                    <div className="relative w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-green-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </td>
                <td className="px-2 py-3">

                  <button className="text-sky-900">Edit</button>


                  <button
                    className="text-red-500 bg-brand border border-transparent hover:bg-brand-strong font-medium rounded-base text-sm px-4 py-2.5"
                    onClick={() => setModalOpen(service.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>


                  {modalOpen === service.id && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-neutral-primary-soft p-6 rounded-base shadow-lg max-w-md w-full opacity-95" style={{ backgroundColor: "white" }}>
                        <h3 className="mb-4 text-body font-medium">Are you sure you want to delete this service?</h3>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={() => deleteService(service.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-base hover:bg-red-600"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => setModalOpen(null)}
                            className="bg-gray-300 text-black px-4 py-2 rounded-base hover:bg-gray-400"
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

        {/* Pagination Footer */}
        <div className="flex justify-between items-center px-5 py-4 text-xs font-medium text-body mx-5">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <input 
              type="number" 
              defaultValue="10" 
              className="border border-gray-300 rounded-md px-1 py-1 bg-white w-12 text-center focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
            <span>Entries</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-black transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div className="bg-black text-white w-8 h-8 rounded flex items-center justify-center">1</div>
            <button className="p-2 text-gray-400 hover:text-black transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
