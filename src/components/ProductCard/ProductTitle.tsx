import { useProductCardContext } from '../../contexts/Product/ProductCardContext';

export default function ProductTitle() {
  const { product } = useProductCardContext();

  return (
    <div>
      <h2 className="font-medium text-xl text-zinc-900">{product.title}</h2>
    </div>
  );
}
