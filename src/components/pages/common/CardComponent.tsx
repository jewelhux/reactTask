import React from 'react';
import { ProductProps } from '../../utils/type';

export function CardComponent(props: ProductProps) {
  const item = props.product;
  return (
    <div className="item-card">
      <h2>{item.title}</h2>
      <div className="item-description">
        <p>Category: {item.category}</p>
        <p>Condition: {item.condition}</p>
        <p>Date: {item.date}</p>
      </div>
      <div className="img-container">
        <img src={item.image} alt="card-img" />
      </div>
    </div>
  );
}
