import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import ProductType from '../../types/Product/ProductType';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const apiResponse = await axios.get('https://fakestoreapi.com/products');

      setProducts(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleReviewProduct = (id: number) => {
    navigate(`/products/detail/${id}`);
  };

  return (
    <main className="p-10">
      {products && (
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              image={<ProductCard.Image />}
              info={
                <ProductCard.Info>
                  <ProductCard.Title />
                  <ProductCard.Description />
                  <div className="flex items-center justify-between">
                    <ProductCard.Rating />
                    <ProductCard.Price currency="USD" />
                  </div>
                </ProductCard.Info>
              }
              action={
                <ProductCard.Button
                  onClick={() => handleReviewProduct(product.id)}
                >
                  Review Product
                </ProductCard.Button>
              }
            />
          ))}
        </div>
      )}
    </main>
  );
}
