import { useEffect, useState } from 'react';
import { useProductDetailContext } from '../../contexts/Product/ProductDetailContext';
import { ProductPriceType } from '../../types/Product/ProductCardType';

export default function ProductDetailPrice({ currency }: ProductPriceType) {
  const { product } = useProductDetailContext();

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

  return (
    <div className="flex text-lg space-x-1 text-zinc-700">
      <span className="font-bold text-2xl">{product.price}</span>
      <span className='text-2xl font-bold'>{currencyIcon}</span>
    </div>
  );
}
