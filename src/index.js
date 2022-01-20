import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import store from './redux/store';
import {Provider} from 'react-redux'
import './scss/app.scss';
import App from './App';
import { createStore } from 'redux'
import rootReducers from './redux/reducers/index';

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Router>
   <Switch>
     <Provider store={store}>
      <App />
      </Provider>
      </Switch>
  </Router>,
  document.getElementById('root'),
);
