import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CardComponent } from './components/pages/common/CardComponent';

// This is the section where we mock `fetch`
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
  it('should work as expected', async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
  });

  it('testing', async () => {
    await act(() => {
      const testProduct = {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      };
      render(<CardComponent product={testProduct}></CardComponent>);
    });
  });

  // it('adds 2 numbers', () => {
  //   expect(1 + 1).toBe(2);
  // });
});
