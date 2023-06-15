import ProductCardContext from '../../contexts/Product/ProductCardContext';
import { ProductCardType } from '../../types/Product/ProductCardType';
import {
  ProductButton,
  ProductCategory,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductTitle,
} from './';

export default function ProductCard({
  product,
  image,
  info,
  action,
}: ProductCardType) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="transition-all duration-[.3s] flex flex-col justify-center items-center border rounded-xl hover:scale-[1.01] shadow">
        <div className="mb-5">{image}</div>
        <div className="p-5 space-y-4">
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Description = ProductDescription;
ProductCard.Info = ProductInfo;
ProductCard.Button = ProductButton;
ProductCard.Price = ProductPrice;
ProductCard.Rating = ProductRating;
ProductCard.Category = ProductCategory;
