import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import initialState from './initialState';
import { Context } from './myContext';
import reducer from './reducer';

let store = createStore(reducer, initialState);

render(<Provider store={store}><Context><App /></Context></Provider>, document.getElementById('app'));