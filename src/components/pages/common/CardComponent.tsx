import React, { Component } from 'react';
import { ProductProps } from '../../utils//type';

export class CardComponent extends Component<ProductProps> {
  constructor(props: ProductProps) {
    super(props);
  }

  render() {
    const item = this.props.product;

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
}
