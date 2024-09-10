import React from 'react';
import { ModeToggle } from '../toggel/page';

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between rounded-lg h-16 bg-gray-800 p-2 md:p-4 lg:p-6 m-0">
        <div className="flex items-center">
          <span className="ml-4 text-xl font-medium text-white">AbdulBaseer</span>
        </div>
        <div>
          <ul className="flex items-center gap-9 md:gap-12 lg:gap-16">
            <li className="mr-4 md:mr-6 lg:mr-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-600">
                Home
              </a>
            </li>
            <li className="mr-4 md:mr-6 lg:mr-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-600">
                About
              </a>
            </li>
            <li className="mr-4 md:mr-6 lg:mr-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-600">
                Contact
              </a>
            </li>
            <li className="mr-4 md:mr-6 lg:mr-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-600">
                Project
              </a>
            </li>
            <li className="mr-4 md:mr-6 lg:mr-8">
              <button className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                ContactUS
              </button>
            </li>
            <li className="mr-4 md:mr-6 lg:mr-8">
              <div className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
               <ModeToggle />
              </div >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}