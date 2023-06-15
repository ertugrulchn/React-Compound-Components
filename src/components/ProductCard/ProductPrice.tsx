import { useState, useEffect } from 'react';
import { useProductCardContext } from '../../contexts/Product/ProductCardContext';
import { ProductPriceType } from '../../types/Product/ProductCardType';

export default function ProductPrice({ currency }: ProductPriceType) {
  const [currencyIcon, setCurrencyIcon] = useState<string>('$');

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

  const { product } = useProductCardContext();

  return (
    <div className="flex items-center justify-center text-lg space-x-1 text-zinc-800">
      <span className="font-medium">{product.price}</span>
      <span>{currencyIcon}</span>
    </div>
  );
}
