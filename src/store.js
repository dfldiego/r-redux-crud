import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//creamos el store
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        //aqui va el codigo para usar redux developer tools
        typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;


/**
 * createStore: crea el store
 * applyMiddleware: con esto podemos pasar thunk y lo agrega como parte del store
 * compose:
 * thunk: permite usar funciones asincronas
 *
 */