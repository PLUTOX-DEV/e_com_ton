import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import ProductInfoPage from './pages/ProductInfo'; // ✅ Add this import
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductInfoPage />} /> {/* ✅ Add this route */}
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Cart route */}
        <Route path="/checkout" element={<CheckoutPage />} />


      </Routes>

    </Router>
  );
}

export default App;
