import { useState, useEffect } from 'react';
import {
  BasketItemProductType,
  BasketItemType,
} from '../../types/Basket/BasketItemType';
import {
  BasketItem,
  BasketItemImage,
  BasketItemInfo,
} from '../../components/BasketItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Basket() {
  const [basketItems, setBasketItems] = useState<BasketItemType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBasketItems();
  }, []);

  const fetchBasketItems = async () => {
    setIsLoading(true);
    try {
      const apiResponse = await axios.get(
        'https://fakestoreapi.com/carts/user/1'
      );
      const fetchedBasketItems: BasketItemType[] = apiResponse.data;

      const productIds: number[] = fetchedBasketItems.flatMap((basketItem) =>
        basketItem.products.map((product) => product.productId)
      );

      const productApiResponses = await Promise.all(
        productIds.map((productId) =>
          axios.get(`https://fakestoreapi.com/products/${productId}`)
        )
      );

      const products: any[] = productApiResponses.map(
        (response) => response.data
      );

      const updatedBasketItems: BasketItemType[] = fetchedBasketItems.map(
        (basketItem) => {
          const combinedProducts: BasketItemProductType[] =
            basketItem.products.map((product) => {
              const foundProduct = products.find(
                (p) => p.id === product.productId
              );
              return foundProduct
                ? { ...product, product: foundProduct }
                : product;
            });

          return {
            ...basketItem,
            products: combinedProducts,
          };
        }
      );

      setBasketItems(updatedBasketItems);
      console.log(basketItems);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <main className="p-10">
      <Loading isLoading={isLoading} />

      <button
        onClick={() => navigate('/products')}
        className="absolute flex items-center justify-center bg-black w-14 h-14 rounded-full"
      >
        <IoMdArrowRoundBack className="text-white" size={25} />
      </button>

      <div className="space-y-10 mt-16">
        {basketItems &&
          basketItems.map(
            (basketItem) =>
              basketItem &&
              basketItem.products.map(
                (item) =>
                  item && (
                    <BasketItem
                      key={item.product.id}
                      product={item}
                      image={<BasketItemImage />}
                      info={<BasketItemInfo currency="USD" />}
                    />
                  )
              )
          )}
      </div>
    </main>
  );
}
