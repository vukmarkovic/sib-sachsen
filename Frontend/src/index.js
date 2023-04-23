import 'react-app-polyfill/ie11'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { setStore } from './Services/Utils/ReduxUtil'

// let persistor = persistStore(store)

const root = createRoot(document.getElementById('root'))

setStore(store)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
