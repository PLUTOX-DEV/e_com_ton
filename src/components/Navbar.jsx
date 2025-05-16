import { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: lucide-react icons

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow-md fixed top-0 left-0 right-0 z-50">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          TON E-Shop
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="p-6">
          {/* Brand */}
          <Link to="/" className="text-3xl font-extrabold text-blue-600 block mb-8">
            TON E-Shop
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 text-lg">
              Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 text-lg">
              Products
            </Link>
          </nav>

          {/* Wallet Connect */}
          <div className="mt-10">
            <TonConnectButton />
          </div>
        </div>
      </aside>

      {/* Push content right on large screens */}
      <div className="md:ml-64 pt-16 md:pt-0 px-4">
        {/* Your page content starts here (wrap your pages with this div) */}
      </div>
    </>
  );
}
