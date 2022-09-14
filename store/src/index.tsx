import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const ReactStrictMode = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(ReactStrictMode, rootElement);
