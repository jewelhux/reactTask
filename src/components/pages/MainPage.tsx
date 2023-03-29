import React, { useEffect, useState } from 'react';
import { SearchComponent } from './common/SearchComponent';
import { ICard } from '../utils/interfaces';
import { LoaderComponent } from './common/LoaderComponent';
import { DATA_LIST } from '../utils/DATA';
import { CardComponent } from './common/CardComponent';

export function MainPage() {
  const [products, setProducts] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(DATA_LIST);
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>Current page: MainPage</h2>
      <SearchComponent />
      <div className="product-list">
        {loading ? (
          <LoaderComponent />
        ) : (
          products.map((product) => <CardComponent key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
}
