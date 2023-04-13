import React from 'react';
import { SearchComponent } from './common/SearchComponent';
import { ICard } from '../utils/interfaces';
import { LoaderComponent } from './common/LoaderComponent';
import { CardComponent } from './common/CardComponent';
import { useSearchProductQuery } from '../DATA/api';
import { useAppSelector } from '../../store/store';

export function MainPage() {
  const textInputSelector = useAppSelector((state) => state.inputName);
  const { isLoading, data } = useSearchProductQuery(textInputSelector.value);

  return (
    <div>
      <h2>Current page: MainPage</h2>
      <SearchComponent />
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="product-list">
          {data?.length ? (
            data.map((product: ICard) => <CardComponent key={product.id} product={product} />)
          ) : (
            <p>Not found card ...</p>
          )}
        </div>
      )}
    </div>
  );
}
