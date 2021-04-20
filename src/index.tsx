import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from 'store/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import App from 'App';

import rootReducer from 'store/combineReducers';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';
import { authenticatedUser } from 'store/actions/auth.actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const user = getItemFromLocalStorage('user');
if (user) {
  store.dispatch(authenticatedUser(user));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
