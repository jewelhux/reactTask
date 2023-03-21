import React, { Component } from 'react';
import { HeadProps } from '../utils//type';
import { ICard, IProducts } from '../utils/interfaces';
import { CardComponent } from './common/CardComponent';
import { FormInputComponnent } from './FormComponent/FormInputComponent';

export class FormPage extends Component<HeadProps, IProducts> {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      products: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }

  onAddCard(newCard: ICard) {
    this.setState((prevState) => ({
      products: [...prevState.products, newCard],
    }));
  }

  render() {
    return (
      <>
        <h2>Current page: FormPage</h2>
        <FormInputComponnent onAddCard={this.onAddCard} />
        <div className="product-list">
          {this.state.products?.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}
