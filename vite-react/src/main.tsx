import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { RecoilRoot } from 'recoil';

import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </Provider>
);
