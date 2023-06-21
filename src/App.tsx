import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import { ProductDetail, Products } from './pages/Products';
import Basket from './pages/Basket';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Product Routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/detail/:id" element={<ProductDetail />} />

      {/* Basket Routes */}
      <Route path="/basket" element={<Basket />} />

      {/* Catch All */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
