import { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          TON E-Shop
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 text-lg font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 text-lg font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            Products
          </Link>
          <TonConnectButton className="ml-4" />
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-label="Toggle menu"
        >
          {/* Simple icon - three dots */}
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="10" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="16" cy="10" r="2" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 border-t border-gray-200">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 text-lg font-medium hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 text-lg font-medium hover:text-blue-600"
          >
            Products
          </Link>
          <TonConnectButton  />
        </div>
      )}
    </nav>
  );
}
