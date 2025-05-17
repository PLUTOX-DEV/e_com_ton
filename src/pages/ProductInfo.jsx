// src/pages/ProductInfoPage.jsx
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext'; // ✅ import cart hook

const products = [
  {
    id: 1,
    name: 'TON Hoodie',
    price: 25, // ✅ price is a number
    description: 'A warm, stylish TON-branded hoodie.',
    image: 'https://images.unsplash.com/photo-1704430705406-24fc29dfcccf?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'TON Sneakers',
    price: 40,
    description: 'Comfortable sneakers made for TON fans.',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'TON Watch',
    price: 55,
    description: 'A luxury watch for true TON supporters.',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&auto=format&fit=crop&q=60',
  },
];

export default function ProductInfoPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <>
      <div className="pt-24 px-4 sm:px-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-xl text-blue-600 font-semibold mb-4">{product.price} TON</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
