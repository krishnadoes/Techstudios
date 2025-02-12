import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

    const toggleMenu = () => {
      setIsOpen(!isOpen); // Toggle the menu open/close state
    };
  
    const closeMenu = () => {
      setIsOpen(false); // Close the menu
    };
  
    return (
  //     <header>
  //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-950 relative">
  //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
  //             <NavLink to="/" className="flex items-center" onClick={closeMenu}>
  //                 <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
  //                 <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">TECHSTUDIOS</span>
  //             </NavLink>
  //             <div className="flex items-center lg:order-2">
  //                 <NavLink to="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-slate-600 focus:outline-none dark:focus:ring-primary-800">Book a call</NavLink>
  //                 <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded={isOpen}>
  //                     <span className="sr-only">Open main menu</span>
  //                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //                         <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
  //                     </svg>
  //                 </button>
  //             </div>
  //             <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'absolute' : 'hidden'} w-full bg-transparent lg:bg-transparent lg:static lg:shadow-none z-10 transition-all duration-300 ease-in-out`} id="mobile-menu">
  //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
  //                     <li>
  //                         <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 rounded ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} lg:bg-transparent lg:text-primary-700 lg:p-0`} onClick={closeMenu}>Home</NavLink>
  //                     </li>
  //                     <li>
  //                         <NavLink to="/services" className={({ isActive }) => `block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`} onClick={closeMenu}>Services</NavLink>
  //                     </li>
  //                     <li>
  //                         <NavLink to="/aboutus" className={({ isActive }) => `block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`} onClick={closeMenu}>About Us</NavLink>
  //                     </li>
  //                     <li>
  //                         <NavLink to="/contact" className={({ isActive }) => `block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`} onClick={closeMenu}>Contact</NavLink>
  //                     </li>
  //                 </ul>
  //             </div>
  //         </div>
  //     </nav>
  // </header>

  <header>
  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-950">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <NavLink to="/" className="flex items-center justify-center" onClick={closeMenu}>
        <img src="tech.png" className="mr-3  sm:h-20 h-16 " alt="Flowbite Logo" />
        {/* <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">TECHSTUDIOS</span> */}
      </NavLink>
      <div className="flex items-center lg:order-2">
        <NavLink to="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-slate-600 focus:outline-none dark:focus:ring-primary-800">Book a call</NavLink>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} w-full`} id="mobile-menu">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 rounded ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} lg:bg-transparent lg:text-primary-700 lg:p-0`} onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => `block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`} onClick={closeMenu}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={({ isActive }) => `block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`} onClick={closeMenu}>About Us</NavLink>
          </li>
       
          <li>
            <NavLink to="/contact" className={({ isActive }) => `block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${isActive ? 'bg-primary-700 text-white' : 'text-gray-900 dark:text-gray-400'} dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`} onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
  );
};

export default Navbar;