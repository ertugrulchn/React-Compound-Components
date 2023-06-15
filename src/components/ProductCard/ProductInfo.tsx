import { ProductInfoType } from '../../types/Product/ProductCardType';

export default function ProductCardInfo({ children }: ProductInfoType) {
  return <div className="space-y-3">{children}</div>;
}
