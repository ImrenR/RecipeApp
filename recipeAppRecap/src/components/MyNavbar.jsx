'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link, NavLink} from'react-router-dom';


const MyNavbar = () => {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return ( 
  <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logout */}
        <Link to="/" className="flex items-center">
          <img
            src="https://static.thenounproject.com/png/2434646-200.png"
            alt="Logo"
            className="h-20 w-20"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          <NavLink
          to="/" 
          style={({isActive})=> ({color:isActive && "red"})}
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Home
          </NavLink>
          <NavLink
          to="/about" 
          style={({isActive})=> ({color:isActive && "red"})}
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            About
          </NavLink>
          <a href="https://github.com/ImrenR" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Github
          </a>
          <Link to="/logout" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Logut
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow">
          <div className="flex flex-col gap-2 p-4">
            <NavLink
          to="/" 
          style={({isActive})=> ({color:isActive && "red"})}
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Home
          </NavLink>
            <NavLink 
            style={({isActive})=>({color:isActive && "blue"})}
            to="/about" 
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
             About
            </NavLink>
            <a href="https://github.com/ImrenR" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
             Github
            </a>
            <Link to="/logout" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
             Logout
            </Link>

          </div>
        </div>
      )}
    </header>)
}

export default MyNavbar
