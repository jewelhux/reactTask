import React, { useEffect, useState } from 'react';
import { SearchComponent } from './common/SearchComponent';
import { ICard } from '../utils/interfaces';
import { LoaderComponent } from './common/LoaderComponent';
import { CardComponent } from './common/CardComponent';
import { getSearchProduct } from '../DATA/api';
import { useAppSelector } from '../../store/store';

export function MainPage() {
  const [products, setProducts] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);
  const textInputSelector = useAppSelector((state) => state.inputName);

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const searchProsucts = await getSearchProduct(textInputSelector.value);
        setProducts(searchProsucts);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [textInputSelector.value]);

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
