import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});

/**
 * este index.js -> combina todos los reducers siempre y cuando tengas 1
 * productos va a tener el productosReducer. pueden haber reducer para clientes
 * u otras cosas y cada reducer va a tener su state.
 *
 *
 */