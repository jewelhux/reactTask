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
        <p className="item-description">{item.description}</p>
        <div className="img-container">
          <img src={item.image} alt="card-img" />
        </div>
      </div>
    );
  }
}
