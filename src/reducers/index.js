import { combineReducers } from 'redux';
import productosReducer from './productosReducer';

export default combineReducers({
    productos: productosReducer,
});

/**
 * este index.js -> combina todos los reducers siempre y cuando tengas 1
 * productos va a tener el productosReducer. pueden haber reducer para clientes
 * u otras cosas y cada reducer va a tener su state.
 *
 *
 */