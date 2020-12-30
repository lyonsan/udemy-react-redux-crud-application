import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//全てのstateを集約するのがstore
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
registerServiceWorker();
