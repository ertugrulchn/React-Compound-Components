import { ReactNode } from 'react';
import ProductType from './ProductType';

export type ProductCardType = {
  product: ProductType;
  image?: ReactNode;
  info?: ReactNode;
  action: ReactNode;
};
export type ProductInfoType = {
  children: ReactNode;
};

export type ProductButtonType = {
  children: ReactNode;
  onClick: (product: ProductType) => void;
};

export type ProductPriceType = {
  currency: string;
};
