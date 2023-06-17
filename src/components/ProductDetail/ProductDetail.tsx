import {
  ProductDetailDescription,
  ProductDetailImage,
  ProductDetailInfo,
  ProductDetailPrice,
  ProductDetailRating,
  ProductDetailTitle,
} from '.';
import ProductDetailContext from '../../contexts/Product/ProductDetailContext';
import { ProductDetailType } from '../../types/Product/ProductCardType';

export default function ProductDetail({
  product,
  image,
  info,
  description,
}: ProductDetailType) {
  return (
    <ProductDetailContext.Provider value={{ product }}>
      <div className="w-full h-full container mx-auto border rounded-xl">
        <div className="w-full h-full flex justify-center">
          <div className="w-full h-full grid grid-cols-2 rounded-xl">
            <div className="flex items-center justify-center bg-white rounded-bl-xl rounded-tl-xl">
              {image}
            </div>
            <div className="p-7 bg-seconder-white rounded-br-xl rounded-tr-xl">
              {info}
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">{description}</div>
      </div>
    </ProductDetailContext.Provider>
  );
}

ProductDetail.Image = ProductDetailImage;
ProductDetail.Description = ProductDetailDescription;
ProductDetail.Info = ProductDetailInfo;
ProductDetail.Price = ProductDetailPrice;
ProductDetail.Rating = ProductDetailRating;
ProductDetail.Title = ProductDetailTitle;
