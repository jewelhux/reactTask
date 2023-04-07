import React, { useState } from 'react';
import { ICard } from '../utils/interfaces';
import { CardComponent } from './common/CardComponent';
import { FormInputComponent } from './FormComponent/FormInputComponent';

export function FormPage() {
  const [products, setProducts] = useState<ICard[]>([]);

  const onAddCard = (newCard: ICard) => {
    setProducts([...products, newCard]);
  };

  return (
    <>
      <h2>Current page: FormPage</h2>
      <FormInputComponent onAddCard={onAddCard} />
      <div className="product-list">
        {products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
