import BasketItemContext from '../../contexts/Basket/BasketItemContext';
import { ReactNode } from 'react';
import { BasketItemProductType } from '../../types/Basket/BasketItemType';

type Props = {
  product: BasketItemProductType;
  image?: ReactNode;
  info?: ReactNode;
};

export default function BasketItem({ product, image, info }: Props) {
  return (
    <BasketItemContext.Provider value={{ product }}>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center md:justify-between space-y-10 border p-6 rounded-xl shadow-sm md:space-y-0">
        <div>{image}</div>
        <div className="w-full">{info}</div>
      </div>
    </BasketItemContext.Provider>
  );
}
