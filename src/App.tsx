import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import { ProductDetail, Products } from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/detail/:id" element={<ProductDetail />} />

      {/* Catch All */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
