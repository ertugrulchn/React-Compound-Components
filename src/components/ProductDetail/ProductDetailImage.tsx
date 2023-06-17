import { useProductDetailContext } from '../../contexts/Product/ProductDetailContext';

export default function ProductDetailImage() {
  const { product } = useProductDetailContext();

  return (
    <div className="w-4/5 rounded-xl flex flex-col items-center justify-center">
      <img className="w-full object-contain min-h-0" src={product.image} />
    </div>
  );
}
