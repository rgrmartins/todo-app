import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'

import App from './main/app'
import reducers from './main/reducers'
import thunk from 'redux-thunk'

//integrando a app redux com plugin do chrome
const devTools = window.__REDUX_DEVETOOLS_EXTENSION__ && window.__REDUX_DEVETOOLS_EXTENSION__()

//criando o store da app, utilizando Middleware para esperar a promise de pesquisa retornar os dados e preencher a list
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'))