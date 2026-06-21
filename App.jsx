import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} setSelectedProductId={setSelectedProductId} />;
      case 'shop':
        return <Shop setPage={setPage} setSelectedProductId={setSelectedProductId} />;
      case 'detail':
        return <ProductDetail productId={selectedProductId} setPage={setPage} />;
      case 'cart':
        return <Cart setPage={setPage} />;
      case 'checkout':
        return <Checkout setPage={setPage} />;
      default:
        return <Home setPage={setPage} setSelectedProductId={setSelectedProductId} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar setPage={setPage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}