import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

/**
 * initialState -> que propiedades puede tener el state de productos?
 * el store le pasa el state y el action, pero si no le pasa nada, el reducer
 * le devuelve al store el initialState por default.
 *
 * todo el reducer es un switch
 * switch(action.type) --> aqui van los case que van a describir lo que va a pasar
 * en nuestra aplicacion y van a ir cambiando el state de acuerdo a los payload
 *
 */