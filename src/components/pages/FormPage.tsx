import React from 'react';
import { useAppSelector } from '../../store/store';
import { CardComponent } from './common/CardComponent';
import { FormInputComponent } from './FormComponent/FormInputComponent';

export function FormPage() {
  const formCardList = useAppSelector((state) => state.formCardList);

  return (
    <>
      <h2>Current page: FormPage</h2>
      <FormInputComponent />
      <div className="product-list">
        {formCardList.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
