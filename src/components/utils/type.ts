import { ICard } from './interfaces';

type HeadProps = Record<string, never>;

type FormAddProps = {
  onAddCard: () => void;
};

type InputProps = {
  setInput: (text: string) => void;
};

type ModalProps = {
  active: boolean;
  setActive: (vision: boolean) => void;
  cardId: number;
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

export type { HeadProps, ProductProps, FormAddProps, InputsForm, InputProps, ModalProps };
