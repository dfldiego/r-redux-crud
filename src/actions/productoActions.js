import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';
import clienteAxios from '../config/axios';

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        // aqui es donde se inserta en la BBDD y se manda a ejecutar el reducer para modificar el state
        // esta funcion la vamos a usar en el componente(vista)
        /* console.log(producto); */
        dispatch(agregarProducto());

        // hacemos consulta a la BBDD
        try {
            // insertar en la API
            await clienteAxios.post('/productos', producto)
            // si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto));
        } catch (error) {
            // debuggear el error
            console.log(error);
            // si hay un error cambiar el state
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
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


/**
 * productosReducer y productoActions tienen los mismos types.
 * aqui tenemos una funcion que se va a utilizar en la vista.
 * por ejemplo: creamos un nuevo objeto de producto, esa funcion hay que usarla
 * se le pasa un valor y se consume en esta parte.
 * payload: lo que va a modificar el state
 * action.type -> describe la aplicacion
 * action.payload -> modificar la aplicacion
 */