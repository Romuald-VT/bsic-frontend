import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#", dropdown: true, subItems: [
    { name: "Personal Banking", path: "/personal-banking" },
    { name: "Business Banking", path: "/credit-card" },
  ] },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img alt="BscBank logo" src={logo} className="h-10 w-auto mr-3" />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="py-2 px-3 text-gray-700 hover:text-indigo-600 transition duration-300 flex items-center"
                      onClick={toggleServicesDropdown}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.subItems.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className="py-2 px-3 text-gray-700 hover:text-indigo-600 transition duration-300">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Login & Signup Buttons */}
            <Link to="/login">
              <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ml-2">
                Signup
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link to={item.path} className="block py-2 px-4 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.subItems.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.path}
                        className="block py-2 px-4 text-sm hover:bg-indigo-400 hover:text-white"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/login">
              <button className="bg-indigo-500 text-white py-2 px-4 rounded w-full mt-2">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 text-white py-2 px-4 rounded w-full mt-2">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
