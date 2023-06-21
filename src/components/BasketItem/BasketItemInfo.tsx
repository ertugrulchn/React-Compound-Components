import { useBasketItemContext } from '../../contexts/Basket/BasketItemContext';
import { ProductPriceType } from '../../types/Product/ProductCardType';
import { useState, useEffect } from 'react';

export default function BasketItemInfo({ currency }: ProductPriceType) {
  const { product } = useBasketItemContext();

  const [currencyIcon, setCurrencyIcon] = useState<string>('$');
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    if (currency == 'TR') {
      setCurrencyIcon('₺');
    } else if (currency == 'EUR') {
      setCurrencyIcon('€');
    } else if (currency == 'USD') {
      setCurrencyIcon('$');
    } else {
      setCurrencyIcon('₺');
    }
  }, [currency]);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center md:justify-around space-y-5">
      <h1 className="font-semibold text-xl text-zinc-800">
        {product.product.title}
      </h1>
      <div className="space-x-2">
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity == 0}
          className="transition-all duration-[.3s] shadow-sm p-4 bg-transparent border rounded hover:bg-black hover:text-white disabled:hover:bg-slate-400"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="transition-all duration-[.3s] shadow-sm p-4 bg-transparent border rounded hover:bg-black hover:text-white"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center text-lg space-x-1 text-zinc-800">
        <span className="font-medium">{product.product.price}</span>
        <span>{currencyIcon}</span>
      </div>
    </div>
  );
}
