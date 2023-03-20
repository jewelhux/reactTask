import { ICard } from './interfaces';

type HeadProps = Record<string, never>;

type FormAddProps = {
  onAddCard: (newCard: ICard) => void;
};

type ProductProps = {
  product: ICard;
};

export type { HeadProps, ProductProps, FormAddProps };
