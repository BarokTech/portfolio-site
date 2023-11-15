import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-stone-200 ">
        <div className="navbar-start">
          <label
            onClick={toggleMenu}
            tabIndex={0}
            className="btn btn-ghost md:hidden"
          >
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
          </label>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm md:hidden dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#" className="text-base">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-base ">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="text-base">
                  Service
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-base  ">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base">
                  Contact
                </a>
              </li>
            </ul>
          )}

          <a className="btn btn-ghost normal-case text-2xl">Ahmed</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#" className="text-base">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="text-base ">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="text-base">
                Service
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-base  ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="text-base">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
