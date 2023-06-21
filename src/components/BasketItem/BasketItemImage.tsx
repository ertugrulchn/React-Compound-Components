import { useBasketItemContext } from '../../contexts/Basket/BasketItemContext';

export default function BasketItemImage() {
  const { product } = useBasketItemContext();

  return (
    <div className="w-64 h-64 rounded-xl flex flex-col items-center justify-center">
      <img
        className="w-full object-contain min-h-0"
        src={product.product.image}
        alt={product.product.title}
      />
    </div>
  );
}
