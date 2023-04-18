import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store/store';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

export function render(url: string, options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
}
