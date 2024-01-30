import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import useAuthUtilite from "../../Hooks/useAuthUtilite";
import Dropdown from "../Dropdown";

const NavLinks = () => {
  const { user } = useAuthUtilite();

  console.log(user);
  return (
    <div className="w-full navbar ">
      <Container>
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <Link to="/" className="flex-1 px-2 mx-2">
          Loigo
        </Link>
        <div className="flex-none hidden lg:block">
          <div className="flex gap-6 mr-5">
            {/* Navbar menu content here */}

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"
              }
            >
              Services
            </NavLink>

            {user?.email ? (
              <Dropdown />
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : "btn btn-ghost"
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavLinks;
