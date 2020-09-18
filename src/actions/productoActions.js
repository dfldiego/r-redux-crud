import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return () => {
        // aqui es donde se inserta en la BBDD y se manda a ejecutar el reducer para modificar el state
        // esta funcion la vamos a usar en el componente(vista)
        console.log(producto);
    }
}


/**
 * productosReducer y productoActions tienen los mismos types.
 * aqui tenemos una funcion que se va a utilizar en la vista.
 * por ejemplo: creamos un nuevo objeto de producto, esa funcion hay que usarla
 * se le pasa un valor y se consume en esta parte.
 */