import React, { Component } from 'react';
import { FormAddProps } from '../../utils//type';
import { IFormValid } from '../../utils/interfaces';
import { targetRadio } from '../../utils/utils';
import {
  validateCondition,
  validateDate,
  validateImage,
  validateName,
} from '../../utils/validates';

export class FormInputComponnent extends Component<FormAddProps, IFormValid> {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  inputImageRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputСonditionRefNew: React.RefObject<HTMLInputElement>;
  inputСonditionRefOld: React.RefObject<HTMLInputElement>;
  inputRulesRef: React.RefObject<HTMLInputElement>;

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
    this.inputDateRef = React.createRef();
    this.inputСonditionRefNew = React.createRef();
    this.inputСonditionRefOld = React.createRef();
    this.inputRulesRef = React.createRef();
  }

  checkAllValidates() {
    const title = validateName(this.inputTitleRef?.current?.value ?? '');
    const image = validateImage(this.inputImageRef?.current?.value ?? '');
    const date = validateDate(this.inputDateRef.current?.value ?? '');
    const condition = validateCondition(
      targetRadio(this.inputСonditionRefNew, this.inputСonditionRefOld)
    );
    const rules = this.inputRulesRef?.current?.checked ?? false;

    this.setState({ titleValid: title });
    this.setState({ imageValid: image });
    this.setState({ dateValid: date });
    this.setState({ conditionValid: condition });
    this.setState({ rulesValid: rules });

    if (title && image && date && condition && rules) return true;
    return false;
  }

  clearForms() {
    if (this.inputTitleRef.current) this.inputTitleRef.current.value = '';
    if (this.inputImageRef.current) this.inputImageRef.current.value = '';
    if (this.inputDateRef.current) this.inputDateRef.current.value = '';
    if (this.inputСonditionRefNew.current) this.inputСonditionRefNew.current.checked = false;
    if (this.inputСonditionRefOld.current) this.inputСonditionRefOld.current.checked = false;
    if (this.inputRulesRef.current) this.inputRulesRef.current.checked = false;
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const isAllValid = this.checkAllValidates();

    // Variables
    const currentTitle = this.inputTitleRef.current?.value ?? '';
    const currentImage = this.inputImageRef.current?.files?.[0];
    const currentDate = this.inputDateRef.current?.value ?? '';
    const currentCondition = targetRadio(this.inputСonditionRefNew, this.inputСonditionRefOld);
    const currentRules = this.inputRulesRef?.current?.checked ?? false;

    if (!isAllValid) {
      this.setState({ message: true });
      return;
    }

    const product = {
      id: Math.trunc(Math.random() * 1e8),
      title: currentTitle,
      image: (currentImage && URL.createObjectURL(currentImage)) ?? '',
      date: currentDate,
      condition: currentCondition,
      category: 'car',
      rules: currentRules,
    };

    this.setState({
      titleValid: validateName(currentTitle),
      imageValid: validateImage(this.inputImageRef?.current?.value ?? ''),
      dateValid: validateDate(currentDate),
      conditionValid: validateCondition(currentCondition),
      categoryValid: false,
      rulesValid: currentRules,
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
          <input type="file" accept=".jpg, .jpeg, .png" id="image-input" ref={this.inputImageRef} />
          {!this.state.imageValid && this.state.message && (
            <span className="color-red">Invalid data</span>
          )}
        </label>
        <label className="form-element">
          <span>Start of sales:</span>
          <input type="date" ref={this.inputDateRef} />
          {!this.state.dateValid && this.state.message && (
            <span className="color-red">Invalid data</span>
          )}
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
            <input type="radio" name="condition" value="New" ref={this.inputСonditionRefNew} />
            New
          </label>
          <label className="radio-element">
            <input type="radio" name="condition" value="Old" ref={this.inputСonditionRefOld} />
            Old
          </label>
          {!this.state.conditionValid && this.state.message && (
            <span className="color-red">Invalid data</span>
          )}
        </div>
        <label className="form-element">
          <span>Rules accept:</span>
          <input type="checkbox" ref={this.inputRulesRef} />
          {!this.state.rulesValid && this.state.message && (
            <span className="color-red">Invalid data</span>
          )}
        </label>
        <button type="submit">Add new card</button>
      </form>
    );
  }
}
