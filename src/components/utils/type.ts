import { ICard } from './interfaces';

type HeadProps = Record<string, never>;

type FormAddProps = {
  onAddCard: (newCard: ICard) => void;
};

type ProductProps = {
  product: ICard;
};

type InputsForm = {
  inputTitle: string;
  inputImage: FileList;
  inputDate: string;
  inputCategory: string;
  inputСondition: string;
  inputRules: boolean;
};

export type { HeadProps, ProductProps, FormAddProps, InputsForm };
