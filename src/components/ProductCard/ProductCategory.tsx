import { useProductCardContext } from '../../contexts/Product/ProductCardContext';

export default function ProductCategory() {
  const { product } = useProductCardContext();

  return <div>{product.category}</div>;
}
