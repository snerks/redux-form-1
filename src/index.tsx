import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

import configureStore from './store/ConfigureStore';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);