import { useProductCardContext } from '../../contexts/Product/ProductCardContext';

export default function ProductCardImage() {
  const { product } = useProductCardContext();

  return (
    <div className="w-72 h-72 rounded-xl flex flex-col items-center justify-center">
      <img className="w-full object-contain min-h-0" src={product.image} />
    </div>
  );
}
