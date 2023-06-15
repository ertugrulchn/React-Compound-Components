import { createContext, useContext } from 'react';
import ProductType from '../../types/Product/ProductType';

const ProductCardContext = createContext<{ product: ProductType } | null>(null);

export function useProductCardContext() {
  const context = useContext(ProductCardContext);

  if (!context)
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard component.'
    );

  return context;
}

export default ProductCardContext;
