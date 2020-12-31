//ここではルーティングのようななことをやりつつ、アプリケーション全体のベースとなるような設定も行っている

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new'
import EventsShow from './components/events_show'
import registerServiceWorker from './registerServiceWorker';

//全てのstateを集約するのがstore
const enhancer = process.env.NODE_ENV ==='development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer )

ReactDOM.render(
  <Provider store={store}>
    {/* リンクをevent_index.jsファイルにて指定しており、Provider内でリンクを有効にするためにwrapする必要がある */}
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        {/* 様々なidをとるため:をつける */}
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );
registerServiceWorker();
