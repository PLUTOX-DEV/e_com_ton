import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your purchase, ${name}! Total: ${totalCost.toFixed(2)} TON`);
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p>Your cart is empty. Please add some items before checking out.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Order Summary with Images */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image || '/default-image.jpg'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-800">{item.name} x {item.quantity}</div>
                <div className="text-sm text-gray-500">{parseFloat(item.price).toFixed(2)} TON each</div>
              </div>
              <div className="font-semibold text-gray-700">
                {(parseFloat(item.price) * item.quantity).toFixed(2)} TON
              </div>
            </div>
          ))}
        </div>
        <div className="font-semibold text-right mt-4 text-lg text-gray-900">
          Total: {totalCost.toFixed(2)} TON
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Shipping Address</label>
          <textarea
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">Cryptocurrency</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
}
