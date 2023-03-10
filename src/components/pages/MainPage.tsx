import React, { Component } from 'react';
import { IMainState } from '../utils/interfaces';
import { CardComponent } from './common/CardComponent';
import { HeadProps } from '../utils/type';
import { LoaderComponent } from './common/LoaderComponent';

export class MainPage extends Component<HeadProps, IMainState> {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      searchInput: props.searchInput,
    };
    console.log(props);
  }

  async componentDidMount() {
    const response = await fetch('https://fakestoreapi.com/products?limit=15');
    const productList = await response.json();

    this.setState({ products: productList, loading: false });
  }

  render() {
    return (
      <div>
        <div className="product-list">
          {this.state.loading ? (
            <LoaderComponent />
          ) : (
            this.state.products?.map((product) => (
              <CardComponent key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    );
  }
}
