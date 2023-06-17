import { useProductDetailContext } from '../../contexts/Product/ProductDetailContext';

export default function ProductDetailDescription() {
  const { product } = useProductDetailContext();

  return (
    <div>
      <h1 className="font-medium text-2xl text-zinc-700">Description</h1>
      <hr className="my-2" />
      <p className="text-lg">{product.description}</p>
    </div>
  );
}
