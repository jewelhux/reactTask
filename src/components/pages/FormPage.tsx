import React, { Component } from 'react';
import { HeadProps } from '../utils//type';
import { IAddProduct } from '../utils/interfaces';
import { CardComponent } from './common/CardComponent';

export class FormPage extends Component<HeadProps, IAddProduct> {
  inputTitleRef: React.RefObject<HTMLInputElement>;

  constructor(props: HeadProps) {
    super(props);
    this.state = {
      id: Math.trunc(Math.random() * 1e8),
      title: '1',
      description: '1',
      image: '1',
      price: 999,
      products: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitleRef = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    const product = {
      id: Math.trunc(Math.random() * 1e8),
      title: this.inputTitleRef?.current?.value ?? '',
      description: '1',
      image: '1',
      price: 999,
    };

    this.setState((prevState) => ({
      products: [...prevState.products, product],
    }));

    event.preventDefault();
  }

  render() {
    return (
      <>
        <h2>Current page: FormPage</h2>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Input name Card" ref={this.inputTitleRef} />
          </label>
          <input type="submit" value="Add card" />
        </form>
        <div className="product-list">
          {this.state.products?.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}
