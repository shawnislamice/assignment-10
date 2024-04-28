import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl gap-0">
            Prebon<span className="text-[#F7424F]">Travels</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  space-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border  duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/alltouristspot"
              >
                All Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/addtouristspot"
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/mylist"
              >
                My List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="navbar-end flex gap-3 "
          data-tip={user?.displayName || "Unknwon User"}
        >
      
          {user ? (
            <div className="dropdown dropdown-end bg-white">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10  p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/profile">Your Profile</Link>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/favourites">Favourites</Link>
                </li>

                <li>
                  <button
                    onClick={() => {
                      window.location.reload();
                      logOut();
                      navigate("/signin");
                    }}
                    className="btn btn-sm  btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-3">
              <Link to="/login">
                <button className="btn bg-[#23BE0A] text-white border-none outline-none">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-secondary text-white border-none outline-none">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
