import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();
