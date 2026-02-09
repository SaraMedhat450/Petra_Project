import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  function handleLogout() {
    localStorage.clear(); 
    navigate("/login");
  }

  return (
    <nav
      className="fixed w-full z-20 top-0 start-0 border-b border-brand-primary/20 text-white bg-brand-dark"
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

        <Link to="/" className="text-xl font-bold">
          Home
        </Link>

        <ul className="flex gap-6">

          {!isLoggedIn ? (
            <li>
              <NavLink to="/login" className="hover:text-brand-secondary transition-colors">
                Login
              </NavLink>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 transition-colors"
              >
                Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}
