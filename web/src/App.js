import React from 'react';
import Routes from './routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducer/index.js'

import  './index.css';

var store = createStore(rootReducer)


const App = () => (

    <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>

    </div>
    
  );

export default App;
