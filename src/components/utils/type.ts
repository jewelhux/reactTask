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

//     this.inputTitleRef = React.createRef();
//     this.inputImageRef = React.createRef();
//     this.inputDateRef = React.createRef();
//     this.inputСonditionRefNew = React.createRef();
//     this.inputСonditionRefOld = React.createRef();
//     this.inputRulesRef = React.createRef();
//     this.inputCategoryRef = React.createRef();

export type { HeadProps, ProductProps, FormAddProps, InputsForm };
