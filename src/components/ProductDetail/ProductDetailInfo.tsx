import { ProductInfoType } from '../../types/Product/ProductCardType';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function ProductDetailInfo({ children }: ProductInfoType) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="w-full space-y-4">{children}</div>

      <div className="w-full flex items-center justify-center mt-10 md:mt-0">
        <button className="flex items-center justify-center gap-x-4 transition-all duration-[.3s] bg-black w-4/5 py-5 rounded-lg text-white font-normal text-xl hover:bg-zinc-800">
          <span>
            <AiOutlineShoppingCart />
          </span>
          <span>Add to Card</span>
        </button>
      </div>
    </div>
  );
}
