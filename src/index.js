import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import OrderDB from './STATES/OrderDB'
import FormDB from './STATES/FormDB'

ReactDOM.render(
  <BrowserRouter>
  <OrderDB>
    <FormDB>
      <App />
    </FormDB>
  </OrderDB>
  </BrowserRouter>,
  document.getElementById('root')
);
