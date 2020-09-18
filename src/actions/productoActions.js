import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        // aqui es donde se inserta en la BBDD y se manda a ejecutar el reducer para modificar el state
        // esta funcion la vamos a usar en el componente(vista)
        /* console.log(producto); */
        dispatch(agregarProducto());

        // hacemos consulta a la BBDD
        try {
            // si todo sale bien
            dispatch(agregarProductoExito(producto));
        } catch (error) {
            // si hay un error
            dispatch(agregarProductoError(true));
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// si el producto se guarda en la BBDD
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
const agregarProductoError = () => { }


/**
 * productosReducer y productoActions tienen los mismos types.
 * aqui tenemos una funcion que se va a utilizar en la vista.
 * por ejemplo: creamos un nuevo objeto de producto, esa funcion hay que usarla
 * se le pasa un valor y se consume en esta parte.
 * payload: lo que va a modificar el state
 * action.type -> describe la aplicacion
 * action.payload -> modificar la aplicacion
 */