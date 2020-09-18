// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
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