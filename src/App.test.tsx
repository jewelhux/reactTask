import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CardComponent } from './components/pages/common/CardComponent';

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
});
