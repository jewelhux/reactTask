interface IHeadInput {
  searchInput: string;
}

interface IProducts {
  products: ICard[];
}

interface ICard {
  id?: number;
  title: string;
  image: string;
  date: string;
  rules: boolean;
  condition: string;
  category: string;
}

interface IMainState {
  products: ICard[];
  loading: boolean;
  searchInput: string;
}

export type { IHeadInput, IMainState, ICard, IProducts };
