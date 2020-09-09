import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import OrderDB from './Order/OrderDB'

ReactDOM.render(
  <BrowserRouter>
  <OrderDB>
    <App />
  </OrderDB>
  </BrowserRouter>,
  document.getElementById('root')
);
