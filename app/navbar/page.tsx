'use client'
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';

export default function Navbar() {

  const [isOpen] = useState(true)

  return (

    <div>
      <nav className="flex items-center justify-between rounded-lg h-16 bg-gray-800 p-2 md:p-4 lg:p-6 m-0">
        <div className="flex items-center">
          <span className="ml-4 text-xl font-medium text-white">AbdulBaseer</span>
        </div>
        <div>
          <ul className="hidden lg:flex items-center gap-9 md:gap-12 lg:gap-16">
            <li className="mr-4 md:mr-6 lg:mr-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:scale-75">
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

            </li>
          </ul>
          {isOpen && (
            <div>
              <Sheet>
                <SheetTrigger className='text-white lg:hidden'><MenuIcon /></SheetTrigger>
                <SheetContent>
                  <SheetHeader>

                    <div className="flex items-center">
                      <span className="ml-16 text-xl font-medium text-black">AbdulBaseer</span>
                    </div>
                    <ul className="lg:hidden col items-center gap-9 md:gap-12 lg:gap-16">
                      <li className="mr-4 md:mr-6 lg:mr-8">
                        <a href="#" className="text-sm font-medium text-black hover:scale-75">
                          Home
                        </a>
                      </li>
                      <li className="mr-4 md:mr-6 lg:mr-8">
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-600">
                          About
                        </a>
                      </li>
                      <li className="mr-4 md:mr-6 lg:mr-8">
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-600">
                          Contact
                        </a>
                      </li>
                      <li className="mr-4 md:mr-6 lg:mr-8">
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-600">
                          Project
                        </a>
                      </li>
                      <li className="mr-4 md:mr-6 lg:mr-8">
                        <button className="px-6 py-2 text-sm font-medium text-black bg-blue-500 rounded-md hover:bg-blue-600">
                          ContactUS
                        </button>
                      </li>
                      <li className="mr-4 md:mr-6 lg:mr-8">

                      </li>
                    </ul>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

            </div>
          )}
        </div>



      </nav>
    </div>
  );
}