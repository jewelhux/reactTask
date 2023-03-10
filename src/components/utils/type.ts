import { IProduct } from './interfaces';

type HeadProps = Record<string, never>;

type ProductProps = {
  product: IProduct;
};

export type { HeadProps, ProductProps };
