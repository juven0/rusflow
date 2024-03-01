import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import{createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducers from './redux/reducers/root.ts'

const store = createStore(
  rootReducers,composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
