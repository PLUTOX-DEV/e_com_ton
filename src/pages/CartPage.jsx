import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border border-gray-200 p-4 rounded-md shadow-sm"
            >
              {/* Product Image */}
              <img
                src={item.image || '/default-image.jpg'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.price} TON each</p>
              </div>

              {/* Quantity and Remove Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 text-sm border rounded disabled:opacity-50"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 text-sm border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right font-semibold text-lg mt-6 text-gray-800">
            Total: {totalCost.toFixed(2)} TON
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => navigate('/checkout')}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
