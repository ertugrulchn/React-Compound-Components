import { createContext, useContext } from 'react';
import ProductType from '../../types/Product/ProductType';

const ProductDetailContext = createContext<{ product: ProductType } | null>(
  null
);

export function useProductDetailContext() {
  const context = useContext(ProductDetailContext);

  console.log(ProductDetailContext);

  if (!context)
    throw new Error(
      'ProductDetail.* component must be rendered as child of ProductDetail component.'
    );

  return context;
}

export default ProductDetailContext;
