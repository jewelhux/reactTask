interface IHeadInput {
  searchInput: string;
}

interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface IMainState {
  products: IProduct[];
  loading: boolean;
  searchInput: string;
}

export type { IHeadInput, IMainState, IProduct };
