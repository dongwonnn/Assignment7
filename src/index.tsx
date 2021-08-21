import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import App from 'App';

ReactDOM.render(
  <BrowserRouter basename="Assignmnet7">
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
