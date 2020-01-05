import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store } from "./store"
import loadable from "./routersLan"
import Router from "./router"


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <Router />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
