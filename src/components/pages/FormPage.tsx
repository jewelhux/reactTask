import React, { Component } from 'react';
import { HeadProps } from '../utils//type';
import { IAddProduct } from '../utils/interfaces';

export class FormPage extends Component<HeadProps, IAddProduct> {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      titleName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ titleName: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log(this.state.titleName);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h2>Current page: FormPage</h2>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Input name Card"
              value={this.state.titleName}
              onChange={this.handleChange}
            ></input>
          </label>
          <input type="submit" value="Add card" />
        </form>
      </>
    );
  }
}
