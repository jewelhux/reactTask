import React, { Component } from 'react';
import { FormAddProps } from '../../utils//type';
import { ICard } from '../../utils/interfaces';

export class FormInputComponnent extends Component<FormAddProps, ICard> {
  inputTitleRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormAddProps) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      image: '',
      date: '',
      rules: false,
      condition: 'new',
      category: 'car',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitleRef = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    const product = {
      id: Math.trunc(Math.random() * 1e8),
      title: String(Math.trunc(Math.random() * 1e8)),
      image: '',
      date: '',
      rules: false,
      condition: 'old',
      category: 'car',
    };

    this.setState({
      id: Math.trunc(Math.random() * 1e8),
      title: 'New',
      image: '',
      date: '',
      rules: false,
      condition: 'old',
      category: 'car',
    });

    console.log('handleSubmit');
    this.props.onAddCard(product);
    event.preventDefault();
  }

  render() {
    return (
      <form className="search-bar form-card" onSubmit={this.handleSubmit}>
        <label className="form-element">
          <span>Name:</span>
          <input type="text" ref={this.inputTitleRef} />
        </label>
        <label className="form-element">
          <span>Image:</span>
          <input type="file" ref={this.inputTitleRef} />
        </label>
        <label className="form-element">
          <span>Date:</span>
          <input type="date" ref={this.inputTitleRef} />
        </label>
        {/* <label className="form-element">
          <span>Category:</span>
          <select type="select" ref={this.inputTitleRef}>
            <option value="car">car</option>
            <option value="home">home</option>
            <option value="clothes">clothes</option>
          </select>
        </label> */}
        <div className="form-element">
          <span>Condition:</span>
          <label className="radio-element">
            <input
              type="radio"
              name="condition"
              value="new"
              defaultChecked
              ref={this.inputTitleRef}
            />
            New
          </label>
          <label className="radio-element">
            <input type="radio" name="condition" value="used" />
            Old
          </label>
        </div>
        <label className="form-element">
          <span>Rules accept:</span>
          <input type="checkbox" ref={this.inputTitleRef} />
        </label>
        <button type="submit">Add new card</button>
      </form>
    );
  }
}
