import React, { RefObject } from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CardComponent } from '../components/pages/common/CardComponent';
import {
  validateCategory,
  validateCondition,
  validateDate,
  validateImage,
  validateName,
} from '../components/utils/validates';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { AboutPage } from '../components/pages/AboutPage';
import { targetRadio } from '../components/utils/utils';
import { fn } from 'jest-mock';
import { FormInputComponent } from '../components/pages/FormComponent/FormInputComponent';
import { FormPage } from '../components/pages/FormPage';
import { SearchComponent } from '../components/pages/common/SearchComponent';
import { LoaderComponent } from '../components/pages/common/LoaderComponent';
import { MainPage } from '../components/pages/MainPage';
import { ModaCardComponent } from '../components/pages/common/ModaCardComponent';
import { getProductForId, getProductList, getSearchProduct } from '../components/DATA/api';
import { vi } from 'vitest';
import { IProducts } from '../components/utils/interfaces';

describe('App', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('all page', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
  });

  it('not found page', () => {
    render(<NotFoundPage />);
  });

  it('about page', () => {
    render(<AboutPage />);
  });

  it('one card', async () => {
    await act(() => {
      const data = {
        id: Math.trunc(Math.random() * 1e8),
        title: 'Test name',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        date: '01.01.1999',
        rules: false,
        condition: 'new',
        category: 'car',
      };

      global.fetch = vi.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => data,
        })
      );

      render(<CardComponent product={data}></CardComponent>);
    });
  });

  it('validate name', async () => {
    await act(() => {
      expect(validateName('Not')).toBe(false);
      expect(validateName('Super')).toBe(true);
    });
  });

  it('validate image', async () => {
    await act(() => {
      expect(validateImage('image')).toBe(true);
      expect(validateImage('')).toBe(false);
    });
  });

  it('validate condition', async () => {
    await act(() => {
      expect(validateCondition('new')).toBe(true);
      expect(validateCategory('')).toBe(false);
    });
  });

  it('validate category', async () => {
    await act(() => {
      expect(validateCondition('new')).toBe(true);
      expect(validateCategory('')).toBe(false);
    });
  });

  it('validate date', async () => {
    await act(() => {
      expect(validateDate('one')).toBe(false);
    });
  });

  it('target radio', async () => {
    await act(() => {
      const refNew = { current: { checked: false } };
      const refOld = { current: { checked: false } };

      const result = targetRadio(
        refNew as RefObject<HTMLInputElement>,
        refOld as RefObject<HTMLInputElement>
      );

      expect(result).toBe('');
    });

    await act(() => {
      const refNew = { current: { checked: true, value: '1' } };
      const refOld = { current: { checked: false, value: '2' } };

      const result = targetRadio(
        refNew as RefObject<HTMLInputElement>,
        refOld as RefObject<HTMLInputElement>
      );

      expect(result).toBe('1');
    });

    await act(() => {
      const refNew = { current: { checked: false, value: '1' } };
      const refOld = { current: { checked: true, value: '2' } };

      const result = targetRadio(
        refNew as RefObject<HTMLInputElement>,
        refOld as RefObject<HTMLInputElement>
      );

      expect(result).toBe('2');
    });
  });

  it('form page component', async () => {
    await act(() => {
      render(<FormPage />);
    });
  });

  test('search component', () => {
    render(
      <SearchComponent
        setInput={function (text: string): void {
          throw new Error(`Function not implemented: ${text}`);
        }}
      />
    );
  });

  test('loader component', () => {
    render(<LoaderComponent />);
  });

  test('form input component', () => {
    const onAddCard = fn();
    const { getByLabelText, getByText } = render(<FormInputComponent onAddCard={onAddCard} />);

    fireEvent.change(getByLabelText(/Title/i), { target: { value: 'New Product' } });
    fireEvent.submit(getByText(/Submit/i));
  });

  it('main page', async () => {
    await act(() => {
      const data: IProducts[] = [];

      global.fetch = vi.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => data,
        })
      );

      render(<MainPage />);
    });
  });

  it('modal card', async () => {
    await act(() => {
      const data = {};

      global.fetch = vi.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => data,
        })
      );

      render(
        <ModaCardComponent
          active={false}
          setActive={function (vision: boolean): void {
            throw new Error(`Function not implemented: ${vision}`);
          }}
          cardId={1}
        />
      );
    });
  });

  test('api getProductList', async () => {
    const data: IProducts[] = [];

    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );

    const cards = await getProductList();
    expect(Array.isArray(cards)).toBe(true);
  });

  test('api getSearchProduct', async () => {
    const data: IProducts[] = [];

    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );

    const card = await getSearchProduct('123456');
    expect(card).toBe(data);
  });

  test('api getProductForId', async () => {
    const data = {};

    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );

    const card = await getProductForId(99);
    expect(card).toBe(data);
  });
});
