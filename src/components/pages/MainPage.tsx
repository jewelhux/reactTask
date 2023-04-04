import React, { useEffect, useState } from 'react';
import { SearchComponent } from './common/SearchComponent';
import { ICard } from '../utils/interfaces';
import { LoaderComponent } from './common/LoaderComponent';
import { CardComponent } from './common/CardComponent';
import { getSearchProduct } from '../DATA/api';

export function MainPage() {
  const [products, setProducts] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState(localStorage.getItem('jikSearch') ?? '');

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const searchProsucts = await getSearchProduct(inputText);
        setProducts(searchProsucts);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [inputText]);

  return (
    <div>
      <h2>Current page: MainPage</h2>
      <SearchComponent setInput={setInputText} />
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
