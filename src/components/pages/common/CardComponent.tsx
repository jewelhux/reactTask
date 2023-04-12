import React, { useState } from 'react';
import { ProductProps } from '../../utils/type';
import { ModaCardComponent } from './ModaCardComponent';

export function CardComponent(props: ProductProps) {
  const item = props.product;
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="item-card" onClick={() => setModalActive(true)}>
        <h2>{item.title}</h2>
        <div className="img-container">
          <img src={item.image} alt="card-img" />
        </div>
      </div>

      {item.id && item.id > 10 ? (
        <></>
      ) : (
        <ModaCardComponent
          active={modalActive}
          setActive={setModalActive}
          cardId={item.id ? item.id : NaN}
        ></ModaCardComponent>
      )}
    </>
  );
}
