
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaCoins,
  FaList,
  FaMoneyBillWave,
  FaUserCircle,
  FaUsersCog,
} from "react-icons/fa";
import { MdAdminPanelSettings, MdManageAccounts, MdOutlineEventAvailable } from "react-icons/md";
import { IoChevronDown, IoChevronUp, IoHome } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);


  const [openBooking, setOpenBooking] = useState(false);

  return (
    <aside className="w-72 bg-[#04364A] text-white p-4 min-h-screen flex flex-col">
      {/* User Info */}
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
              {localStorage.getItem("userRole") || "customer"}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col gap-2 mt-4 text-base">
        <div
          className="flex items-center justify-between px-4 py-2 rounded-md "
        >
          <div className="flex items-center gap-3">
            <FaList className="text-2xl" />
            <span className="text-base font-medium">Points</span>
          </div>
          <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded-full font-medium">
            545 LE
          </span>
        </div>

        <Link
          to="/customer/main"
          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
        >
          <div className="flex items-center gap-3">
            <IoHome className="text-2xl" />
            <span className="text-base font-medium">Main</span>
          </div>
        </Link>

        <div>
          <button
            onClick={() => setOpenBooking(!openBooking)}
            className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
          >
            <div className="flex items-center gap-3">
              <MdOutlineEventAvailable className="text-2xl" />
              <span className="text-base font-medium">Booking Management</span>
            </div>
            {openBooking ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
          </button>

          {openBooking && (
            <div className="ml-6 mt-1 flex flex-col gap-1">
              <Link
                to="/customer/booking"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-[#64ccc5]"
              >
                Booking List
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/customer/provider"
          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
        >
          <div className="flex items-center gap-3">
            <FaUsersCog className="text-2xl" />
            <span className="text-base font-medium">Provider Management</span>
          </div>
        </Link>

        <Link
          to="/customer/payout"
          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
        >
          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="text-2xl" />
            <span className="text-base font-medium">Payout</span>
          </div>
        </Link>

        <Link
          to="/customer/customersm"
          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
        >
          <div className="flex items-center gap-3">
            <MdManageAccounts className="text-2xl" />
            <span className="text-base font-medium">Customer Management</span>
          </div>
        </Link>

        <Link
          to="/customer/system"
          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
        >
          <div className="flex items-center gap-3">
            <MdAdminPanelSettings className="text-2xl" />
            <span className="text-base font-medium">System Users</span>
          </div>
        </Link>

        <Link
          to="/customer/cashback"
          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#64ccc5]"
        >
          <div className="flex items-center gap-3">
            <FaCoins className="text-2xl" />
            <span className="text-xl font-medium">Points & Cashback Management</span>
          </div>
        </Link>
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
    </aside>
  );
}