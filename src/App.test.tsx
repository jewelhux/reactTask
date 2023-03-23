import React, { RefObject } from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CardComponent } from './components/pages/common/CardComponent';
import {
  validateCategory,
  validateCondition,
  validateDate,
  validateImage,
  validateName,
} from './components/utils/validates';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { AboutPage } from './components/pages/AboutPage';
import { targetRadio } from './components/utils/utils';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    } as Response);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('App', () => {
  it('all page', async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
  });

  it('not found page', async () => {
    await act(() => {
      render(<NotFoundPage />);
    });
  });

  it('about page', async () => {
    await act(() => {
      render(<AboutPage />);
    });
  });

  it('one card', async () => {
    await act(() => {
      const testProduct = {
        id: Math.trunc(Math.random() * 1e8),
        title: 'Test name',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        date: '01.01.1999',
        rules: false,
        condition: 'new',
        category: 'car',
      };
      render(<CardComponent product={testProduct}></CardComponent>);
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
});
