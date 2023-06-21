import ProductType from '../Product/ProductType';

export type BasketItemType = {
  id: number;
  userId: number;
  date: string;
  products: BasketItemProductType[];
};

export type BasketItemProductType = {
  product: ProductType;
  productId: number;
  quantity: number;
};
