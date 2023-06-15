type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRatingType;
};

type ProductRatingType = {
  rate: number;
  count: number;
};

export default ProductType;
