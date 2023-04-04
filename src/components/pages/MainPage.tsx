import React, { useEffect, useState } from 'react';
import { SearchComponent } from './common/SearchComponent';
import { ICard } from '../utils/interfaces';
import { LoaderComponent } from './common/LoaderComponent';
import { CardComponent } from './common/CardComponent';
import { getProductList } from '../DATA/api';

export function MainPage() {
  const [products, setProducts] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      const allProsucts = await getProductList();
      setProducts(allProsucts);
      setLoading(false);
    };

    fetchProduct();
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
