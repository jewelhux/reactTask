import React from 'react';
import { FormAddProps, InputsForm } from '../../utils//type';
import {
  validateCategory,
  validateCondition,
  validateDate,
  validateImage,
  validateName,
} from '../../utils/validates';
import { useForm } from 'react-hook-form';

export function FormInputComponent(props: FormAddProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputsForm>({ reValidateMode: 'onSubmit' });

  const onSubmit = (data: InputsForm) => {
    console.log(data);
    const product = {
      id: Math.trunc(Math.random() * 1e8),
      title: data.inputTitle,
      image: URL.createObjectURL(data.inputImage[0]),
      date: data.inputDate,
      condition: data.inputСondition,
      category: data.inputCategory,
      rules: false,
    };

    props.onAddCard(product);
    reset();
  };

  return (
    <form className="search-bar form-card" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-element">
        Title
        <input
          type="text"
          {...register('inputTitle', {
            required: true,
            validate: {
              validate: (value) => validateName(value),
            },
          })}
        />
        {errors.inputTitle && (
          <span className="color-red">Error! The length must be at least 5 characters!</span>
        )}
      </label>
      <label className="form-element">
        Image
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          {...register('inputImage', {
            required: true,
            validate: {
              validate: (value) => validateImage(value[0].name),
            },
          })}
        />
        {errors.inputImage && <span className="color-red">Error! Image not selected!</span>}
      </label>
      <label className="form-element">
        Start of sales
        <input
          type="date"
          {...register('inputDate', {
            required: true,
            validate: {
              validate: (value) => validateDate(value),
            },
          })}
        />
        {errors.inputDate && (
          <span className="color-red">Error! The date should be no earlier than tomorrow!</span>
        )}
      </label>
      <label className="form-element">
        Category
        <select
          {...register('inputCategory', {
            required: true,
            validate: {
              validate: (value) => validateCategory(value),
            },
          })}
        >
          <option value="">-</option>
          <option value="car">car</option>
          <option value="home">home</option>
        </select>
        {errors.inputCategory && (
          <span className="color-red">Error! You need to choose car or home!</span>
        )}
      </label>
      <div className="form-element">
        Condition
        <label className="radio-element">
          <input
            type="radio"
            value="New"
            {...register('inputСondition', {
              required: true,
              validate: {
                validate: (value) => validateCondition(value),
              },
            })}
          />
          New
        </label>
        <label className="radio-element">
          <input
            type="radio"
            value="Old"
            {...register('inputСondition', {
              required: true,
              validate: {
                validate: (value) => validateCondition(value),
              },
            })}
          />
          Old
        </label>
        {errors.inputСondition && (
          <span className="color-red">Error! You need to choose new or old!</span>
        )}
      </div>
      <label className="form-element">
        Rules accept
        <input
          type="checkbox"
          {...register('inputRules', {
            required: true,
            validate: {
              validate: (value) => value === true,
            },
          })}
        />
        {errors.inputRules && (
          <span className="color-red">Error! It is necessary to adopt the rules!</span>
        )}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
