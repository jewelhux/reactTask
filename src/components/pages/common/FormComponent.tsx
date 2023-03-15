import React, { Component } from 'react';
import { ProductProps } from '../../utils//type';

export class FormComponent extends Component<ProductProps> {
  constructor(props: ProductProps) {
    super(props);
  }

  render() {
    return <div>123</div>;
  }
}
