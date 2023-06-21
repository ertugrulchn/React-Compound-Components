import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import ProductType from '../../types/Product/ProductType';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { BsFillBasket3Fill } from 'react-icons/bs';

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>();
  const [categories, setCategories] = useState<string[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const apiResponse = await axios.get('https://fakestoreapi.com/products');

      setProducts(apiResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const apiResponse = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );

      setCategories(apiResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleReviewProduct = (id: number) => {
    navigate(`/products/detail/${id}`);
  };

  const handleCategoryButton = async (category: string) => {
    setIsLoading(true);
    try {
      const apiResponse = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      setProducts([...apiResponse.data]);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <main className="p-10">
      <Loading isLoading={isLoading} />

      <div className="absolute right-0 top-0">
        <button
          type="button"
          className="p-6 bg-black text-white mr-10 mt-5 w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-sm"
          onClick={() => navigate('/basket')}
        >
          <BsFillBasket3Fill className="text-white" size={26} />
        </button>
      </div>

      <div className="mt-20 w-full flex items-center justify-start p-5 md:p-0 md:py-5 md:justify-center overflow-y-auto space-x-4 mb-10 py-5 rounded-xl border shadow-sm">
        {categories && (
          <>
            <button
              type="button"
              className="transition-all duration-[.3s] border p-4 rounded-xl font-medium hover:bg-black hover:text-white"
              onClick={fetchProducts}
            >
              All Products
            </button>

            {categories.map((item, index) => (
              <button
                key={index}
                type="button"
                className="transition-all duration-[.3s] border p-4 rounded-xl font-medium hover:bg-black hover:text-white capitalize"
                onClick={() => handleCategoryButton(item)}
              >
                {item}
              </button>
            ))}
          </>
        )}
      </div>

      {products && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
