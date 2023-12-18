import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Disclosure } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import OpenIcon from '../assets/open-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

export const navbar = () => {
  const navigation = [
    {name:'Home', path: '/'},
    // {name:'About Me', path: '/about-me'},
    {name:'Education', path: '/education'},
    {name:'Skills', path: '/skills'},
    // {name:'Projects', path: '/projects'},
    {name:'Contact', path: '/contact'},
  ];


  return (
    <div className='w-full'>
      <nav className="container relative flex flex-row items-center justify-between p-8 mx-auto lg:justify-between xl:px-0 xxxs:max-sm:pr-0 xxxs:max-sm:pl-0">
        {/* <img src={logo} alt="logo" /> */}
        <Disclosure>
          {({ open }) => (
            <>
            <div className='relative w-full justify-between'>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <NavLink to='/'>
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span className='font-family:Lilita One text-black'>
                    pplus
                  </span>
                </span>
                </NavLink>

              <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
              </Disclosure.Button>
              </div>

              <Disclosure.Panel className="absolute z-10 flex flex-wrap w-full my-5 lg:hidden bg-white rounded-md shadow-md p-5">
                  <>
                    {navigation.map((item, index) => (
                      <NavLink key={index} to={item.path} className="w-full px-4 py-2 -ml-4 " >
                          {item.name}

                      </NavLink>
                    ))}
                  </>
              </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="flex flex-row items-center justify-center">
            {navigation.map((item, index) => (
              <NavLink key={index} to={item.path} className="px-4 py-2 hover:text-indigo-500 truncate">
                  {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        
      </nav>

    </div>
  );
}

export default navbar
