import { useProductDetailContext } from '../../contexts/Product/ProductDetailContext';

export default function ProductDetailTitle() {
  const { product } = useProductDetailContext();

  return <h1 className="text-2xl font-semibold text-zinc-700">{product.title}</h1>;
}
