import { useProductCardContext } from '../../contexts/Product/ProductCardContext';

export default function ProductDescription() {
  const { product } = useProductCardContext();

  return (
    <div className="text-zinc-500">
      {product.description.substring(0, 120)}...
    </div>
  );
}
