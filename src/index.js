import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import OrderDB from './states/OrderDB'
import FormDB from './states/FormDB'

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
