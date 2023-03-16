import React, { Component } from 'react';
import { SearchComponent } from './common/SearchComponent';
import { IMainState } from '../utils/interfaces';
import { CardComponent } from './common/CardComponent';
import { HeadProps } from '../utils/type';
import { LoaderComponent } from './common/LoaderComponent';
import { DATA_LIST } from '../utils/DATA';

export class MainPage extends Component<HeadProps, IMainState> {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      searchInput: props.searchInput,
    };
  }

  async componentDidMount() {
    const productList = DATA_LIST;
    this.setState({ products: productList, loading: false });
  }

  render() {
    return (
      <div>
        <h2>Current page: MainPage</h2>
        <SearchComponent />
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
