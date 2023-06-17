import { useState, useEffect } from 'react';
import ProductType from '../../types/Product/ProductType';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductDetail } from '../../components/ProductDetail';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Loading from '../../components/Loading';

export default function ProductsDetail() {
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const fetchProduct = async () => {
    setIsLoading(true);

    try {
      const apiResponse = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(apiResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="p-10">
      <Loading isLoading={isLoading} />
      <button
        onClick={() => navigate('/products')}
        className="absolute flex items-center justify-center bg-black w-14 h-14 rounded-full"
      >
        <IoMdArrowRoundBack className="text-white" size={25} />
      </button>
      {product && (
        <ProductDetail
          product={product}
          image={<ProductDetail.Image />}
          info={
            <ProductDetail.Info>
              <ProductDetail.Title />
              <div className="flex items-center justify-between">
                <ProductDetail.Price currency="USD" />
                <ProductDetail.Rating />
              </div>
              <ProductDetail.Description />
            </ProductDetail.Info>
          }
        />
      )}
    </main>
  );
}
