import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
