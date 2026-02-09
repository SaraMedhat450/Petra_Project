import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCoins, FaList } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Provider() {

  const [openMenu, setOpenMenu] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>

      <div className="flex">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
          </svg>
        </button>

        <aside id="default-sidebar" className="fixed left-0 z-40 w-70 h-screen transition-transform -translate-x-full sm:translate-x-0 text-white bg-brand-dark top-0" aria-label="Sidebar">
          <div className="flex flex-col h-full bg-neutral-primary-soft border-e border-default">

            {/* User Profile Section */}
            {userData && (
              <div className="p-4 border-b border-brand-primary/20 flex items-center text-center">
                <div className="w-10 h-10 me-3 rounded-full bg-brand-light mb-2 flex items-center justify-center overflow-hidden border-2 border-brand-secondary">
                  {userData.image ? (
                    <img src={userData.image} alt="User Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl text-brand-primary font-bold">{userData.name?.[0]?.toUpperCase() || "U"}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-medium text-sm truncate w-full">{userData.email || "No Email"}</h3>
                  <span className="text-xs text-brand-secondary px-2 py-0.5 bg-brand-primary/20 rounded mt-1 capitalize">
                    {localStorage.getItem("userRole") || "Provider"}
                  </span>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-3 py-4 no-scrollbar pb-10">
              <ul className="space-y-2 text-sm font-normal">

                <li className="flex items-center text-body justify-between px-4 py-2 rounded-md ">
                  <div className="flex items-center gap-3">
                    <FaList className="text-lg" />
                    <span className="text-base font-medium">Points</span>
                  </div>
                  <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded-full font-medium">
                    545 LE
                  </span>
                </li>

                <li>
                  <Link to='/provider/main' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <IoHome className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Main</span>
                  </Link>
                </li>


                <li>
                  <Link to='/provider/categoryManagement' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <BiCategoryAlt className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Category Management</span>
                  </Link>
                </li>

                <li>
                  <li>
                    <button
                      onClick={() => toggleMenu("service")}
                      className="flex items-center w-full px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      <GrServices className="text-lg" />
                      <span className="flex-1 ms-3 text-left">Service Management</span>

                      <i
                        className={`fa-solid fa-chevron-down transition-transform ${openMenu === "service" ? "rotate-180" : ""
                          }`}
                      ></i>
                    </button>

                    {openMenu === "service" && (
                      <ul className="mt-1 ms-6 space-y-1 text-sm">
                        <li>
                          <Link
                            to="/provider/serviceList"
                            className="block px-2 py-1 rounded hover:bg-brand-primary/80 focus:bg-brand-primary/80 transition-colors"
                          >
                            • Services List
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/provider/addService"
                            className="block px-2 py-1 rounded hover:bg-brand-primary/80 focus:bg-brand-primary/80 transition-colors"
                          >
                            • Add new Service
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                </li>

                <li>
                  <Link to='/provider/bookingManagement' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <MdOutlineEventAvailable className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Booking Management</span>
                  </Link>
                </li>

                <li>
                  <Link to='/provider/providersManagement' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <FaUsersCog className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Providers Management</span>
                  </Link>
                </li>

                <li>
                  <Link to='/provider/payout' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <FaMoneyBillWave className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Payout</span>
                  </Link>
                </li>

                <li>
                  <Link to='/provider/customerManagement' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <MdManageAccounts className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Customer Management</span>
                  </Link>
                </li>

                <li>
                  <Link to='/provider/systemUsers' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <MdAdminPanelSettings className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">System Users</span>
                  </Link>
                </li>

                <li className="mb-2">
                  <Link to='/provider/cashbackManagement' className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-brand-primary hover:text-white focus:bg-brand-primary group">
                    <FaCoins className="text-lg" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Points & Cashback Management</span>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="p-4 border-t border-brand-primary/20">
              <button
                onClick={handleLogout}
                className="flex items-center w-full py-2 text-body rounded-base text-white hover:bg-red-500/20 hover:text-red-300 transition-colors group"
              >
                <i className="fa-solid fa-arrow-right-from-bracket group-hover:text-red-400"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </button>
            </div>

          </div>
        </aside>

        <div className=" sm:ml-64 w-3/4">
          <Outlet />
        </div>
      </div>

    </>
  );
}