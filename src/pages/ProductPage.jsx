import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const products = [
  {
    id: 1,
    name: 'TON Hoodie',
    price: 25, // ✅ now a number
    image: 'https://images.unsplash.com/photo-1704430705406-24fc29dfcccf?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'TON Sneakers',
    price: 40, // ✅ now a number
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'TON Watch',
    price: 55, // ✅ now a number
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&auto=format&fit=crop&q=60',
  },
];

export default function ProductPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <>
  
      <div className="pt-24 px-4 sm:px-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price} TON</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
