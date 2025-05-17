import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems, removeFromCart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TON Store
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        </div>

        {/* Wallet & Cart */}
        <div className="flex items-center gap-4">
          <TonConnectButton />

          {/* Cart Button */}
          <div className="relative">
            <button
              aria-label="Cart"
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative p-2"
            >
              <ShoppingCart className="w-6 h-6 text-gray-800" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
                <h4 className="font-semibold mb-2 text-gray-800">Cart Items</h4>
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-500">Cart is empty</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto space-y-3">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between gap-3 text-sm text-gray-700"
                        >
                          <img
                            src={item.image || '/default-image.jpg'}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{item.name} x{item.quantity}</div>
                            <div className="text-xs text-gray-500">{item.price} TON each</div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-xs ml-2"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-sm font-medium text-gray-800">
                      Total: {totalCost.toFixed(2)} TON
                    </div>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/cart');
                      }}
                      className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700"
                    >
                      Go to Cart
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
