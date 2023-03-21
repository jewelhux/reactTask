import React, { Component } from 'react';
import { FormAddProps } from '../../utils//type';
import { IFormValid } from '../../utils/interfaces';
import { validateName } from '../../utils/validates';

export class FormInputComponnent extends Component<FormAddProps, IFormValid> {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  inputImageRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormAddProps) {
    super(props);
    this.state = {
      titleValid: false,
      imageValid: false,
      imageUrl: '',
      dateValid: false,
      rulesValid: false,
      conditionValid: false,
      categoryValid: false,
      message: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitleRef = React.createRef();
    this.inputImageRef = React.createRef();
  }

  checkAllValidates() {
    const title = validateName(this.inputTitleRef?.current?.value ?? '');
    this.setState({ titleValid: title });

    if (title) return true;
    return false;
  }

  clearForms() {
    if (this.inputTitleRef.current) this.inputTitleRef.current.value = '';
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const isAllValid = this.checkAllValidates();

    // Variables
    const currentTitle = this.inputTitleRef?.current?.value ?? '';
    const currentImage = this.inputImageRef.current?.files?.[0];

    if (!isAllValid) {
      this.setState({ message: true });
      return;
    }

    const product = {
      id: Math.trunc(Math.random() * 1e8),
      title: currentTitle,
      image: (currentImage && URL.createObjectURL(currentImage)) ?? '',
      date: '12.12.2000',
      rules: false,
      condition: 'old',
      category: 'car',
    };

    this.setState({
      titleValid: validateName(currentTitle),
      imageValid: false,
      dateValid: false,
      rulesValid: false,
      conditionValid: false,
      categoryValid: false,
    });

    this.clearForms();
    this.props.onAddCard(product);
  }

  render() {
    return (
      <form className="search-bar form-card" onSubmit={this.handleSubmit}>
        <label className="form-element">
          <span>Name:</span>
          <input type="text" ref={this.inputTitleRef} />
          {!this.state.titleValid && this.state.message && (
            <span className="color-red">Invalid data</span>
          )}
        </label>
        <label className="form-element">
          <span>Image:</span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/gif"
            id="image-input"
            ref={this.inputImageRef}
          />
        </label>
        <label className="form-element">
          <span>Date:</span>
          <input type="date" />
        </label>
        {/* <label className="form-element">
          <span>Category:</span>
          <select type="select">
            <option value="car">car</option>
            <option value="home">home</option>
            <option value="clothes">clothes</option>
          </select>
        </label> */}
        <div className="form-element">
          <span>Condition:</span>
          <label className="radio-element">
            <input type="radio" name="condition" value="new" defaultChecked />
            New
          </label>
          <label className="radio-element">
            <input type="radio" name="condition" value="used" />
            Old
          </label>
        </div>
        <label className="form-element">
          <span>Rules accept:</span>
          <input type="checkbox" />
        </label>
        <button type="submit">Add new card</button>
      </form>
    );
  }
}
