import { createContext, useContext } from 'react';
import { BasketItemProductType } from '../../types/Basket/BasketItemType';

const BasketItemContext = createContext<{
  product: BasketItemProductType;
} | null>(null);

export function useBasketItemContext() {
  const context = useContext(BasketItemContext);

  if (!context)
    throw new Error(
      'BasketItem.* component must be rendered as child of BasketItem component.'
    );

  return context;
}

export default BasketItemContext;
