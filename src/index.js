import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/Reducers'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/css/material-dashboard-react.css?v=1.4.1";

import indexRoutes from "./routes/index.jsx";
import registerServiceWorker from './registerServiceWorker';

const hist = createBrowserHistory();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
