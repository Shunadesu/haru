import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../ulities/path';

import navbardata from '../../ulities/data/navbar/navbardata'
import submenudata from '../../ulities/data/navbar/submenudata'
const Nav = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="w-full flex justify-between items-center text-sm text-gray-800 font-baskervville uppercase px-8">
      {/* Main Navigation Links */}
      {navbardata.map((item) => (
        <Link
          key={item.text}
          className="w-full text-center hover:text-gray-500"
          to={item.path}
        >
          {item.text}
        </Link>
      ))}

      {/* Menu Dropdown */}
      <div
        className="relative w-full text-center"
        onMouseEnter={() => setHoveredItem('menu')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <Link className="hover:text-gray-500" to={path.MENU}>
          Menu
        </Link>

        {hoveredItem === 'menu' && (
          <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md w-full">
            {submenudata.map((submenu) => (
              <Link
                key={submenu.name}
                to={submenu.path}
                className="block px-4 py-2 text-xs hover:bg-gray-100"
              >
                {submenu.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;