// src/pages/LandingPage.jsx
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const navigate = useNavigate(); // ✅ Get navigate instance here

  return (
    <div className="h-screen w-full bg-[url('https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col items-center justify-center text-white pt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-center">
        Welcome to TON E-commerce
      </h1>
      <button
        onClick={() => navigate('/products')} // ✅ Use navigate function here
        className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white px-8 py-4 rounded-full text-xl shadow-lg"
      >
        Shop Now
      </button>
    </div>
  );
}
