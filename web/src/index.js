import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';

import store from './store'

import App from './App';

ReactDOM.render(

  <React.StrictMode>

    <CookiesProvider>

      <Provider store={store} >

        <App />
        
      </Provider>

    </CookiesProvider>

  </React.StrictMode>,

  document.getElementById('root')

);