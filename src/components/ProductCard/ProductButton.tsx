import { useProductCardContext } from '../../contexts/Product/ProductCardContext';
import { ProductButtonType } from '../../types/Product/ProductCardType';

export default function ProductCardButton({
  children,
  onClick,
}: ProductButtonType) {
  const { product } = useProductCardContext();

  const handleClick = () => onClick(product);

  return (
    <div className="w-full">
      <button
        className="transition-all duration-[.3s] bg-black w-full py-4 rounded-lg text-white hover:bg-zinc-800"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}
